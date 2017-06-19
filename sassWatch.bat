if not "%minimized%"=="" goto :minimized
set minimized=true
start /min cmd /C "%~dpnx0"
goto :EOF
:minimized
cd c:\Ruby24-x64\
sass --watch "C:\Users\james\Documents\GitHub\jamsjordn.github.io\assets\sass\site.scss":"C:\Users\james\Documents\GitHub\jamsjordn.github.io\assets\css\site.css"