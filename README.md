
### AWS Deployment Instructions (for FREE)

1. Create an AWS account, launch t2micro EC2 instance. Be sure to save the .pem file in 
your computer. Use command below to ssh into an instance

    ```
    ssh -i aws_key_pair.pem ec2-user@<public-ipv4>
    ```

2. Upgrade apps in EC2 instance by executing following command
    ```
    sudo yum update -- to update apps in AWS
    ```

3. Instaling node in EC2 instance. Explained more here (https://linuxize.com/post/how-to-install-node-js-on-centos-7/)

    ```
    curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
    sudo yum install -y nodejs
    ```

4. Install git using command 

    ```
    sudo yum install git
    ```

5. Clone repo using command

    ```
    git clone <repo-link>
    ```

6. Install nginx using command
    ```
    sudo yum install nginx
    ```

7. Nginx related commands (start, stop, status, reload, restart)

    ```
    sudo service nginx start
    sudo service nginx stop
    sudo service nginx status
    sudo service nginx reload
    sudo service nginx restart
    ```

8. Build the vue project using 

    ```
    sudo npm run build
    ``` 
    This creates a dist folder with all the static files.

9. Copy dist folder to \usr\share\nginx directory using command
    
    ```
    sudo cp -R dist \usr\share\nginx\dist
    ```


10. Change owner of dist (if user is not root)
   
    ```
    sudo chown -R root:root \usr\share\nginx\dist
    ```

11. Update configuration file for nginx
    ```
    sudo nano \etc\nginx\nginx.conf
    server kduwadi.com www.kduwadi.com;
    location / {
        root /usr/dist;
    }
    
    location /api/ {
        proxy_pass http://localhost/5001;
    }

    Make sure your backend has /api/<> route implemented
    ```

12. Save new config and restart nginx (you can use `sudo nginx -t` to test the new conf file)

13. Go to web browser and type public domain and see if the link works

14. Note in AWS you need to define proper security groups (allow http and https in outbound and inbound rules)

15. To attach domain name to AWS EC2 instance 
    
    15.1. Goto NameCheap, log in, go to Domain List, Manage the website you want, Advanced DNS
    
    15.2. create two records
        
        A Record, host = @, value = <public ip address>
        
        C Name record, host = www, value = <public DNS>
    
    Update the website address.

16. Now visit your website should work !

17. Getting SSL with Let's encrypt

    ```
    sudo yum install epel-release or sudo amazon-linux-extras install epel
    sudo yum install certbot python-certbot-nginx
    sudo certbot --nginx -d kduwadi.com -d www.kduwadi.com
    certbot renew --dry-run
    ```
  
18. Deploying python backend server

    - If python is not installed execute 
        ```
        sudo yum install python37
        ```
    - Install all dependencies using 
        ```
        pip3 install <module_name>
        ```
    - Set environment variables using command 
        ```
        export BASE_URL=www.kduwadi.com
        ```
19. How to deploy aiohttp server in separate process

	- Install supervisord usng command 
        ```
        pip3 install superviosr
        ```
	- Run command `echo_supervisord_conf > supervisord.conf` to write default configuration
	
    - Killing the process where supervisord is running (https://stackoverflow.com/questions/14479894/stopping-supervisord-shut-down)
	  
      ```
      ps -ef | grep supervisord
	  kill -s SIGTERM <>
      ```
	  
	  supervisord config
	  ```
      [program:aiohttp]
	  numprocs=1
	  numprocs_start=1
	  process_name= example_%(process_num)s
	  command=/usr/bin/python3 /home/ec2-user/server.py 
	  autostart=true
	  autorestart=true 
	  stderr_logfile=/home/mylog.err.log
	  stdout_logfile=/home/ec2-user/mylog.log 
	  environment=HELLO='hello',PASS='pass'
      ```

    - Run the server in a process

        ```
        supervisord -c supervisor.conf
        ```


	  
	  
