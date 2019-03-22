# sncp

example
```bash
snfind -n ".mp4" -f | xargs -0 sncp -o ./videos
```

主要解决xargs 无法识别 文件名有空格和小括号的问题...
