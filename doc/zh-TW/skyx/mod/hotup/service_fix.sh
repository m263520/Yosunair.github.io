#!/bin/sh

while [[ "$(getprop sys.boot_completed)" != "1" ]]
  do
    sleep 3
done

sleep 10

export Main_Path="$(dirname "$(readlink -f "${0}")")"

find "${Main_Path}" -type d -exec chmod -R 755 {} + >/dev/null 2>&1

cd "${Main_Path}/skyx"
nohup ./skyxhotup --load > '/dev/null' 2>&1 &

exit 256