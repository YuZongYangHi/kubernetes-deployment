[Unit]
Description=kube-apiserver nginx proxy
After=network.target
After=network-online.target
Wants=network-online.target

[Service]
Type=forking
ExecStartPre={{ base_dir }}/kube-nginx/sbin/nginx -c \
{{ base_dir }}/kube-nginx/conf/kube-nginx.conf -p {{ base_dir }}/kube-nginx -t
ExecStart={{ base_dir }}/kube-nginx/sbin/nginx -c \
{{ base_dir }}/kube-nginx/conf/kube-nginx.conf -p {{ base_dir }}/kube-nginx
ExecReload={{ base_dir }}/kube-nginx/sbin/nginx -c \
{{ base_dir }}/kube-nginx/conf/kube-nginx.conf -p {{ base_dir }}/kube-nginx -s reload
PrivateTmp=true
Restart=always
RestartSec=5
StartLimitInterval=0
LimitNOFILE=65536

[Install]
WantedBy=multi-user.target
