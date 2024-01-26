echo Starting Upload Script
set /p version="Version (n for only latest): "
if /i "%version%" == "n" (
docker build . -t oribia/oribia.dev
docker push oribia/oribia.dev
) else (
docker build . -t oribia/oribia.dev
docker build . -t oribia/oribia.dev:%version%
docker push oribia/oribia.dev:latest
docker push oribia/oribia.dev:%version%
)
pause