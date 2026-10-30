import os
import sys

SUBDIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "elevation-electronics")
sys.path.insert(0, SUBDIR)

from app import app, create_or_update_admin_cli  # noqa: E402

if __name__ == "__main__":
    if len(sys.argv) >= 4 and sys.argv[1] == "--create-admin":
        create_or_update_admin_cli(sys.argv[2], sys.argv[3])
    else:
        port = int(os.environ.get("PORT", 5000))
        app.run(host="127.0.0.1", port=port, debug=False)

