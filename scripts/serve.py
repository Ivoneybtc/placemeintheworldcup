#!/usr/bin/env python3
"""Minimal static file server for local preview."""
import argparse
import functools
import http.server
import os
import socketserver

HERE = os.path.dirname(os.path.abspath(__file__))
DIRECTORY = os.path.dirname(HERE)  # project root


def parse_args():
    parser = argparse.ArgumentParser(description="Serve the static app locally.")
    parser.add_argument("--host", default="127.0.0.1", help="Host/IP to bind. Use 0.0.0.0 for phone testing.")
    parser.add_argument("--port", default=4321, type=int, help="Port to listen on.")
    return parser.parse_args()


args = parse_args()

Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIRECTORY)


class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True


with ThreadingTCPServer((args.host, args.port), Handler) as httpd:
    print(f"Serving {DIRECTORY} at http://{args.host}:{args.port}/")
    httpd.serve_forever()
