#!/bin/bash
# Submit all site URLs to IndexNow after deployment.
# Usage: ./scripts/indexnow-submit.sh

HOST="mapcombiner.travel-tracker.org"
KEY="02e0fdc8a6e04712b4af51a05d173281"
KEY_LOCATION="https://${HOST}/${KEY}.txt"
ENDPOINT="https://api.indexnow.org/indexnow"

URLS=(
  "https://${HOST}/"
  "https://${HOST}/download"
  "https://${HOST}/about"
  "https://${HOST}/history"
  "https://${HOST}/privacy"
  "https://${HOST}/donate"
)

PAYLOAD=$(cat <<EOF
{
  "host": "${HOST}",
  "key": "${KEY}",
  "keyLocation": "${KEY_LOCATION}",
  "urlList": [
$(printf '    "%s",\n' "${URLS[@]}" | sed '$ s/,$//')
  ]
}
EOF
)

echo "Submitting ${#URLS[@]} URLs to IndexNow..."
RESPONSE=$(curl -s -w "\n%{http_code}" -X POST "${ENDPOINT}" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "${PAYLOAD}")

HTTP_CODE=$(echo "${RESPONSE}" | tail -1)
BODY=$(echo "${RESPONSE}" | sed '$d')

if [ "${HTTP_CODE}" -ge 200 ] && [ "${HTTP_CODE}" -lt 300 ]; then
  echo "Success (HTTP ${HTTP_CODE}). URLs submitted to Bing, Yandex, Seznam, and Naver."
else
  echo "Failed (HTTP ${HTTP_CODE}): ${BODY}"
  exit 1
fi
