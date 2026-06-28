#!/usr/bin/env python3
import html
import json
import re
from pathlib import Path

import requests


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "world-cup-2026-team-assets"
FOOTY_OVERVIEW_URL = "https://www.footyheadlines.com/2025/08/2026-world-cup-kit-overview.html"
FOX_STANDINGS_URL = "https://www.foxsports.com/soccer/fifa-world-cup/standings"
FIFA_TEAMS_URL = "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams"


TEAMS = [
    {"group": "A", "source": "Mexico", "name": "Mexico", "supplier": "adidas"},
    {"group": "A", "source": "South Africa", "name": "South Africa", "supplier": "adidas"},
    {"group": "A", "source": "South Korea", "name": "South Korea", "supplier": "Nike"},
    {"group": "A", "source": "Czech Republic", "name": "Czechia", "supplier": "Puma"},
    {"group": "B", "source": "Canada", "name": "Canada", "supplier": "Nike"},
    {"group": "B", "source": "Bosnia", "name": "Bosnia and Herzegovina", "supplier": "Kelme"},
    {"group": "B", "source": "Qatar", "name": "Qatar", "supplier": "adidas"},
    {"group": "B", "source": "Switzerland", "name": "Switzerland", "supplier": "Puma"},
    {"group": "C", "source": "Brazil", "name": "Brazil", "supplier": "Nike"},
    {"group": "C", "source": "Morocco", "name": "Morocco", "supplier": "Puma"},
    {"group": "C", "source": "Haiti", "name": "Haiti", "supplier": "Saeta"},
    {"group": "C", "source": "Scotland", "name": "Scotland", "supplier": "adidas"},
    {"group": "D", "source": "United States", "name": "United States", "supplier": "Nike"},
    {"group": "D", "source": "Paraguay", "name": "Paraguay", "supplier": "Puma"},
    {"group": "D", "source": "Australia", "name": "Australia", "supplier": "Nike"},
    {"group": "D", "source": "Turkey", "name": "Turkey", "supplier": "Nike"},
    {"group": "E", "source": "Germany", "name": "Germany", "supplier": "adidas"},
    {"group": "E", "source": "Curacao", "name": "Curacao", "supplier": "adidas"},
    {"group": "E", "source": "Ivory Coast", "name": "Ivory Coast", "supplier": "Puma"},
    {"group": "E", "source": "Ecuador", "name": "Ecuador", "supplier": "Marathon"},
    {"group": "F", "source": "Netherlands", "name": "Netherlands", "supplier": "Nike"},
    {"group": "F", "source": "Japan", "name": "Japan", "supplier": "adidas"},
    {"group": "F", "source": "Sweden", "name": "Sweden", "supplier": "adidas"},
    {"group": "F", "source": "Tunisia", "name": "Tunisia", "supplier": "Kappa"},
    {"group": "G", "source": "Belgium", "name": "Belgium", "supplier": "adidas"},
    {"group": "G", "source": "Egypt", "name": "Egypt", "supplier": "Puma"},
    {"group": "G", "source": "Iran", "name": "Iran", "supplier": "Majid"},
    {"group": "G", "source": "New Zealand", "name": "New Zealand", "supplier": "Puma"},
    {"group": "H", "source": "Spain", "name": "Spain", "supplier": "adidas"},
    {"group": "H", "source": "Cape Verde", "name": "Cape Verde", "supplier": "Capelli"},
    {"group": "H", "source": "Saudi Arabia", "name": "Saudi Arabia", "supplier": "adidas"},
    {"group": "H", "source": "Uruguay", "name": "Uruguay", "supplier": "Nike"},
    {"group": "I", "source": "France", "name": "France", "supplier": "Nike"},
    {"group": "I", "source": "Senegal", "name": "Senegal", "supplier": "Puma"},
    {"group": "I", "source": "Iraq", "name": "Iraq", "supplier": "Jako"},
    {"group": "I", "source": "Norway", "name": "Norway", "supplier": "Nike"},
    {"group": "J", "source": "Argentina", "name": "Argentina", "supplier": "adidas"},
    {"group": "J", "source": "Algeria", "name": "Algeria", "supplier": "adidas"},
    {"group": "J", "source": "Austria", "name": "Austria", "supplier": "Puma"},
    {"group": "J", "source": "Jordan", "name": "Jordan", "supplier": "Kelme"},
    {"group": "K", "source": "Portugal", "name": "Portugal", "supplier": "Puma"},
    {"group": "K", "source": "DR Congo", "name": "DR Congo", "supplier": "Umbro"},
    {"group": "K", "source": "Uzbekistan", "name": "Uzbekistan", "supplier": "7Saber"},
    {"group": "K", "source": "Colombia", "name": "Colombia", "supplier": "adidas"},
    {"group": "L", "source": "England", "name": "England", "supplier": "Nike"},
    {"group": "L", "source": "Croatia", "name": "Croatia", "supplier": "Nike"},
    {"group": "L", "source": "Ghana", "name": "Ghana", "supplier": "Puma"},
    {"group": "L", "source": "Panama", "name": "Panama", "supplier": "Reebok"},
]


DESCRIPTIONS = {
    "Mexico": "deep green home jersey with tonal Aztec-calendar geometric artwork across the front, white adidas shoulder stripes, a red-and-white V collar, red sleeve cuffs, and the Mexico crest on the chest",
    "South Africa": "bright yellow home jersey with a subtle tonal diamond texture, green collar and sleeve trim, green adidas shoulder details, and the South Africa crest on the chest",
    "South Korea": "red home jersey with a tonal tiger-stripe brush pattern, black collar and sleeve cuffs, black side details, a white Nike logo, and the South Korea crest",
    "Czechia": "rich red Puma home jersey with a clean polo-style collar, white piping on the collar and cuffs, white Puma logos, and the Czech shield crest",
    "Canada": "red Nike home jersey with tonal maple-leaf shard geometry, darker red paneling, a simple crew collar, and the Canada crest on the chest",
    "Bosnia and Herzegovina": "royal blue Kelme home jersey with subtle vertical striping, thin gold accent lines, blue cuffs, and the Bosnia and Herzegovina crest",
    "Qatar": "maroon adidas home jersey with a darker central zigzag pattern, white shoulder stripes, white sleeve trim, and the Qatar crest",
    "Switzerland": "red Puma home jersey with a subtle wave-like tonal graphic near the hem, white collar and shoulder accents, and the Swiss crest",
    "Brazil": "canary yellow Nike home jersey with a subtle tonal texture, green collar and sleeve trim, dark green accents, and the Brazil crest",
    "Morocco": "red Puma home jersey with green collar and sleeve trim, gold Puma branding, a central Morocco crest, and a restrained classic national-team look",
    "Haiti": "royal blue Saeta home jersey with red-and-white collar trim, red sleeve accents, a darker blue lower-front graphic, and the Haiti crest",
    "Scotland": "dark navy adidas home jersey with a tonal tartan-style texture, white shoulder stripes, light trim, and the Scotland crest",
    "United States": "off-white Nike home jersey with bold flowing red horizontal stripes like a waving flag, navy collar and sleeve cuffs, navy side details, and the USA crest",
    "Paraguay": "white home jersey with distressed red vertical stripes, blue collar and sleeve trim, thin blue accents, and the Paraguay crest",
    "Australia": "gold Nike home jersey with a green collar, green side accents, subtle tonal texture, and the Australia crest",
    "Turkey": "white Nike home jersey with a wide red chest band containing the Turkish flag mark, red side accents, and a minimal modern finish",
    "Germany": "white adidas home jersey with a black, red, and gold diamond chevron across the upper chest, black collar trim, dark sleeve accents, and the Germany crest",
    "Curacao": "royal blue adidas home jersey with bright turquoise patterned sleeves and side panels, yellow-green trim, white shoulder stripes, and the Curacao crest",
    "Ivory Coast": "orange Puma home jersey with a tonal elephant-and-foliage inspired pattern, green sleeve trim, white Puma marks, and the Ivory Coast crest",
    "Ecuador": "yellow Marathon home jersey with dark navy collar and sleeve trim, a subtle tonal texture, and the Ecuador crest in dark detailing",
    "Netherlands": "bright orange Nike home jersey with black collar and sleeve trim, black side accents, a tonal orange crest, and a clean modern Oranje look",
    "Japan": "deep blue adidas home jersey with lighter blue radiating line artwork, white shoulder stripes, red-and-white collar details, and the Japan crest",
    "Sweden": "yellow adidas home jersey with blue shoulder blocks, blue collar and sleeve bands, white adidas details, and the Sweden crest",
    "Tunisia": "red Kappa home jersey with white collar and cuffs, white graphic panels on the sleeves and sides, and the Tunisia crest centered on the chest",
    "Belgium": "deep red adidas home jersey with a tonal floral diamond pattern, black-and-yellow collar and cuff trim, yellow adidas branding, and the Belgium crest",
    "Egypt": "red Puma home jersey with black collar and sleeve trim, a tonal pharaonic star-and-wing chest graphic, and the Egypt crest",
    "Iran": "white Majid home jersey with a pale grey map-style motif across the lower torso, red-green-black collar and cuff trim, and the Iran crest",
    "New Zealand": "black Puma home jersey with dark tonal fern and Maori-inspired swirl artwork, white Puma branding, and the New Zealand crest",
    "Spain": "red adidas home jersey with navy sleeves and side panels, fine yellow pinstripes, yellow adidas branding, and the Spain crest",
    "Cape Verde": "deep blue Capelli home jersey with a darker geometric triangular pattern, red-and-white collar trim, and the Cape Verde crest",
    "Saudi Arabia": "dark green adidas home jersey with tonal palm-and-diamond patterning, purple decorative accents, white shoulder stripes, and the Saudi Arabia crest",
    "Uruguay": "pale sky-blue Nike home polo jersey with a white collar, minimal navy trim, and the Uruguay crest",
    "France": "royal blue Nike home jersey with tonal diagonal wave artwork, a tricolor collar detail, gold rooster crest, and a polished France look",
    "Senegal": "green Puma home jersey with a tonal central decorative pattern, yellow collar trim, red side and sleeve accents, and the Senegal crest",
    "Iraq": "white Jako home jersey with a subtle grey chevron lattice pattern, black-red-green collar and cuff trim, and the Iraq crest",
    "Norway": "red Nike home jersey with a large navy cross outlined in white, flag-inspired paneling, white-and-blue trim, and the Norway crest",
    "Argentina": "white and sky-blue adidas home jersey with vertical stripes, soft blue gradient edges, dark navy shoulder stripes and cuffs, gold champion details, and the AFA crest with stars",
    "Algeria": "off-white adidas home jersey with green collar and cuff trim, green shoulder accents, faint green vertical striping, and the Algeria crest",
    "Austria": "red Puma home jersey with black sleeves and side blocks, black collar trim, white Puma branding, and the Austria crest",
    "Jordan": "white Kelme home jersey with a red dotted gradient on the shoulders and sleeves, subtle vertical pinstripes, red-black collar trim, and the Jordan crest",
    "Portugal": "deep red Puma home jersey with thin tonal wave lines, green collar and sleeve trim, and the Portugal crest",
    "DR Congo": "turquoise Umbro home jersey with a white flame-like graphic rising from the hem, small red-yellow-green accents, and the DR Congo crest",
    "Uzbekistan": "royal blue 7Saber home jersey with a tonal diamond ikat pattern, white side piping, green-and-white collar trim, and the Uzbekistan crest",
    "Colombia": "yellow adidas home jersey with a subtle tonal texture, light blue collar and sleeve trim, light blue shoulder accents, and the Colombia crest",
    "England": "white Nike home jersey with subtle tonal texture, navy-and-burgundy collar and cuff stripes, slim side details, and the England crest",
    "Croatia": "white Nike home jersey with bold red checkerboard blocks across the shoulders and sides, blue Nike branding, and the Croatia crest",
    "Ghana": "white Puma home jersey with a multicolor thin-line geometric map pattern, a black star centered on the chest, black collar trim, and the Ghana crest",
    "Panama": "red Reebok home jersey with black-and-white collar and sleeve trim, an orange-red gradient front, and the Panama crest",
}


def source_key(name):
    return name.replace("Curacao", "Curaçao")


def folder_name(name):
    safe = name.replace("'", "").replace("/", " ")
    return re.sub(r"\s+", " ", safe).strip()


def image_extension(url):
    match = re.search(r"\.(jpg|jpeg|png|webp)(?:\?|$)", url, flags=re.IGNORECASE)
    if not match:
        return ".jpg"
    ext = match.group(1).lower()
    return ".jpg" if ext == "jpeg" else f".{ext}"


def fetch_text(session, url):
    response = session.get(url, timeout=30)
    response.raise_for_status()
    return response.text


def extract_team_images(page_html):
    start = page_html.find("<h3>Group A</h3>")
    if start == -1:
        raise RuntimeError("Could not find Group A in Footy Headlines overview page")

    end_candidates = [
        page_html.find("### Bespoke", start),
        page_html.find("<h3>Bespoke", start),
        page_html.find("Bespoke Adidas 2026 World Cup Goalkeeper", start),
    ]
    end_candidates = [idx for idx in end_candidates if idx != -1]
    end = min(end_candidates) if end_candidates else len(page_html)
    article = page_html[start:end]

    wanted = {source_key(team["source"]) for team in TEAMS}
    markers = []
    for match in re.finditer(r"<p><b>([^<]+)</b></p>", article):
        name = html.unescape(match.group(1))
        if name in wanted:
            markers.append((name, match.start(), match.end()))

    images = {}
    for index, (name, marker_start, marker_end) in enumerate(markers):
        next_start = markers[index + 1][1] if index + 1 < len(markers) else len(article)
        block = article[marker_end:next_start]
        matches = re.findall(
            r'href="(https://(?:blogger\.googleusercontent|images\.footballfanatics|cdn\.shopify)[^"]+?\.(?:jpg|jpeg|png|webp)(?:\?[^"]*)?)"'
            r'|data-src="(https://(?:blogger\.googleusercontent|images\.footballfanatics|cdn\.shopify)[^"]+?\.(?:jpg|jpeg|png|webp)(?:\?[^"]*)?)"',
            block,
            flags=re.IGNORECASE,
        )
        urls = []
        for first, second in matches:
            url = html.unescape(first or second)
            if url not in urls:
                urls.append(url)
        if not urls:
            raise RuntimeError(f"No image URL found for {name}")
        images[name] = urls[0]

    if len(images) != len(TEAMS):
        missing = sorted(wanted - set(images))
        raise RuntimeError(f"Expected {len(TEAMS)} images, found {len(images)}. Missing: {missing}")

    return images


def download_image(session, url, destination):
    response = session.get(url, timeout=30)
    response.raise_for_status()
    destination.write_bytes(response.content)


def build_metadata(team, image_url, image_file, index):
    name = team["name"]
    prompt_description = DESCRIPTIONS[name]
    return {
        "id": f"{index:02d}-{folder_name(name).lower().replace(' ', '-')}",
        "name": name,
        "sourceTeamName": team["source"],
        "group": team["group"],
        "kitSupplier": team["supplier"],
        "primaryJersey": {
            "type": "home",
            "promptDescription": prompt_description,
            "promptSnippet": f"wearing {name}'s 2026 primary home jersey: {prompt_description}",
            "imageFile": image_file,
            "imageSourceUrl": image_url,
            "sourcePage": FOOTY_OVERVIEW_URL,
        },
        "references": {
            "teamsPage": FIFA_TEAMS_URL,
            "standingsPage": FOX_STANDINGS_URL,
            "kitOverviewPage": FOOTY_OVERVIEW_URL,
        },
        "usageNote": "Downloaded jersey image is a research/reference asset. Confirm publishing rights before using it publicly.",
    }


def write_readme(manifest):
    readme = [
        "# World Cup 2026 Team Jersey Prompt Assets",
        "",
        "This folder contains one subfolder per team in the 48-team FIFA World Cup 2026 field.",
        "Each team folder includes:",
        "",
        "- `team.json`: team name, group, kit supplier, primary jersey prompt description, and source URLs.",
        "- `primary-jersey.*`: the downloaded primary/home jersey reference image when available from the kit overview source.",
        "",
        "Primary sources used for this research pack:",
        "",
        f"- FIFA teams page: {FIFA_TEAMS_URL}",
        f"- FOX Sports standings/group page: {FOX_STANDINGS_URL}",
        f"- Footy Headlines 2026 kit overview: {FOOTY_OVERVIEW_URL}",
        "",
        "Usage note: jersey images are included as local research/reference files for prompt-building. Confirm licensing before publishing these images in a public product.",
        "",
        f"Generated teams: {len(manifest)}",
        "",
        "## Teams",
        "",
    ]
    for team in manifest:
        readme.append(f"- Group {team['group']}: {team['name']} ({team['kitSupplier']})")
    (OUTPUT_DIR / "README.md").write_text("\n".join(readme) + "\n", encoding="utf-8")


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    session = requests.Session()
    session.headers.update({"User-Agent": "Mozilla/5.0"})
    page_html = fetch_text(session, FOOTY_OVERVIEW_URL)
    images = extract_team_images(page_html)

    manifest = []
    for index, team in enumerate(TEAMS, start=1):
        team_dir = OUTPUT_DIR / folder_name(team["name"])
        team_dir.mkdir(parents=True, exist_ok=True)

        image_url = images[source_key(team["source"])]
        image_file = f"primary-jersey{image_extension(image_url)}"
        image_path = team_dir / image_file
        download_image(session, image_url, image_path)

        metadata = build_metadata(team, image_url, image_file, index)
        (team_dir / "team.json").write_text(json.dumps(metadata, indent=2) + "\n", encoding="utf-8")
        manifest.append(metadata)

    (OUTPUT_DIR / "teams.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    write_readme(manifest)
    print(f"Wrote {len(manifest)} team folders to {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
