graph LR
    A(输入长链接) --> B(调用MurmurHash函数计算哈希值)
    B --> C(将哈希值转换成36进制字符串)
    C --> D(截取前6个字符作为短链标识)
    D --> E(拼接短链前缀)
    E --> F(输出短链)
