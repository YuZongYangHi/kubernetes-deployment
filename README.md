### Kubernetes 1.24: Stargazer
https://kubernetes.io/zh-cn/blog/2022/05/03/kubernetes-1-24-release-announcement/

### Major Themes
#### Dockershim Removed from kubelet
After its deprecation in v1.20, the dockershim component has been removed from the kubelet in Kubernetes v1.24. From v1.24 onwards, you will need to either use one of the other supported runtimes (such as containerd or CRI-O) or use cri-dockerd if you are relying on Docker Engine as your container runtime. For more information about ensuring your cluster is ready for this removal, please see this guide.

### List
* kube-apiserver v1.24.10
* kube-controller-manager v1.24.10
* kubectl v1.24.10
* kubelet  v1.24.10
* kube-proxy v1.24.10
* kube-scheduler v1.24.10
* calico v3.25
* containerd 

### configuration
```bash
# global variable
group_vars/global.yml
```
### quick start
```bash
cd kubernetes-deployment

# set env 
export ANSIBLE_ROOT=$PWD

# test
ansible-playbook -i hosts/xxx setup.yml --sy 

# deploy
ansible-playbook -i hosts/xxx setup.yml
```
### Warning
Currently available for testing and pre-release environments, please modify the configuration and deployment as needed in the production environment
