#!/usr/bin/env python3
"""Simple HTTP server that serves 404.html for unknown routes."""
import http.server
import socketserver
import os

PORT = int(os.environ.get("PORT", 8000))

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.translate_path(self.path)
        if not os.path.exists(path):
            self.send_response(404)
            self.send_header("Content-type", "text/html")
            self.end_headers()
            with open("404.html", "rb") as f:
                self.wfile.write(f.read())
        else:
            super().do_GET()

with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"Starting HTTP server at http://localhost:{PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
