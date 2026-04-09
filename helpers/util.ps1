Get-ChildItem -File -Recurse | Where-Object { $($_ | Get-Content | Select-Object -First 1) -eq "#"} | ForEach-Object {$a = $_ | get-content ; $b = $a | Select-Object -Skip 1; Set-Content $_ -Value $b -WhatIf}

``([a-z]*\.h)''
``\href{./v6/$1}{$1}''