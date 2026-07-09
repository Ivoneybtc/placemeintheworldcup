#!/usr/bin/env python3
"""Regression test for the local preview server handling a slow client."""
import contextlib
import socket
import subprocess
import sys
import time
import urllib.request


HOST = "127.0.0.1"


def free_port():
    with contextlib.closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as sock:
        sock.bind((HOST, 0))
        return sock.getsockname()[1]


def wait_for_server(proc, port):
    deadline = time.time() + 5
    while time.time() < deadline:
        if proc.poll() is not None:
            raise RuntimeError("server exited early")
        try:
            with urllib.request.urlopen(f"http://{HOST}:{port}/", timeout=0.25) as response:
                if response.status == 200:
                    return
        except OSError:
            time.sleep(0.05)
    raise TimeoutError("server did not start")


def main():
    port = free_port()
    proc = subprocess.Popen(
        [sys.executable, "scripts/serve.py", "--host", HOST, "--port", str(port)],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    slow_sock = None
    try:
        wait_for_server(proc, port)
        slow_sock = socket.create_connection((HOST, port), timeout=1)

        with urllib.request.urlopen(f"http://{HOST}:{port}/app.js", timeout=1) as response:
            body = response.read()

        assert response.status == 200
        assert b"renderScenes" in body
    finally:
        if slow_sock is not None:
            slow_sock.close()
        proc.terminate()
        try:
            proc.wait(timeout=2)
        except subprocess.TimeoutExpired:
            proc.kill()
            proc.wait(timeout=2)


if __name__ == "__main__":
    main()
