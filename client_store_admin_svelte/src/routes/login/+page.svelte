<script>
    import Icon from "svelte-icons-pack";
    import CgPassword from "svelte-icons-pack/cg/CgPassword";
    import AiOutlineMail from "svelte-icons-pack/ai/AiOutlineMail";
    let email = '', password = ''
    
</script>

<div class="login-page">

    <form action="?/login" method="POST" class="login-div">
        <div class="login-header">
            <div class="l-h-t">Login</div>
            <div class="l-h-t-small">No Account ? | <a href="/register" style="color: white;">Register</a></div>
        </div>
       
        <div class="input-holder">
            <label for=""><Icon src={AiOutlineMail} color="#ffff" size="20" title='email' /></label>
            <input name='email' bind:value={email} type="email" class="register-input" placeholder="Email">
        </div>

        <div class="input-holder" >
            <label for=""><Icon src={CgPassword} color="#ffff" size="20" title='password' /></label>
            <input name='password' bind:value={password} type="password" class="register-input" placeholder="Enter password">
        </div>

        <button class="basic-btn">Login</button>
    </form>
</div>
