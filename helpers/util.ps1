Get-ChildItem -File -Recurse | Where-Object { $($_ | Get-Content | Select-Object -First 1) -eq "#"} | ForEach-Object {$a = $_ | get-content ; $b = $a | Select-Object -Skip 1; Set-Content $_ -Value $b -WhatIf}

``([a-z]*\.h)''
``\href{./v6/$1}{$1}''

(alloc\.c|clock\.c|fio\.c|iget\.c|main\.c|malloc\.c|nami\.c|pipe\.c|prf\.c|rdwri\.c|sig\.c|slp\.c|subr\.c|sys1\.c|sys2\.c|sys3\.c|sys4\.c|sysent\.c|text\.c|trap.c)
``\href{./v6/ken/$1}{$1}''

(bio\.c|cat\.c|dc\.c|dh\.c|dhdm\.c|dhfdm\.c|dn\.c|dp\.c|hp\.c|hs\.c|ht\.c|kl\.c|lp\.c|mem\.c|partab\.c|pc\.c|rf\.c|rk\.c|rp\.c|sys\.c|tc\.c|tm\.c|tty\.c|vs\.c|vt\.c)
``\href{./v6/dmr/$1}{$1}''