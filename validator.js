function set_proxy_pass(r) {
	r.error(r.variables.request_body)
    r.subrequest("/check", { method: 'POST' })
        .then(res => {
        	res.status == 200 ? 
        	r.variables.proxy_pass = "http://172.20.0.1:8082" : r.variables.proxy_pass = "http://172.20.0.1:8081"
        	r.return(200);
        });
}

export default {set_proxy_pass};