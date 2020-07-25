# Useful tools for working with networks

## Tools for DNS lookup

- `dig`
- `host`
- `nslookup`

## Using tcpdump

See all awaitable interfaces with `tcpdump -D`

Find GET requests:

```
tcpdump -s 0 -A 'tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x47455420'
```

For more see this awesome tool: https://www.wireshark.org/tools/string-cf.html

The
[following command](https://explainshell.com/explain?cmd=tcpdump+-s+0+-U+-n+-w+-+-i+any+not+port+22)
gives a much more _raw_ output. It's handy to redirect its output to a file and then use Wireshark
to read it.

```
tcpdump -s 0 -U -n -w - -i any not port 22
```

Further reading 📚:

- [An introduction to using tcpdump at the Linux command line](https://opensource.com/article/18/10/introduction-tcpdump)

## Wireshark 🦈

[Check out this cheet sheet from comparitech](https://www.comparitech.com/net-admin/wireshark-cheat-sheet/)
