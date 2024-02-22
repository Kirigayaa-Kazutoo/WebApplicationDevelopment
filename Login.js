var a;
function pass()
{
    if(a==1)
    {
        document.getElementById('password').type='password';
        document.getElementById('lock-icon').name='lock-closed-outline';

        a=0;
    }
    else
    {
        document.getElementById('password').type='text';
        document.getElementById('lock-icon').name='lock-open-outline';

        a=1;
    }
    
}