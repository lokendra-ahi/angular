echo Building App in %DEPLOYMENT_SOURCE%…
pushd "%DEPLOYMENT_SOURCE%"
call :ExecuteCmd !NPM_CMD! run build