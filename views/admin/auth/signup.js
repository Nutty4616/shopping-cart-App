const layout = require('../layout');

module.exports = ({
    req
}) => {
    return layout({
        content: `
      <div>
        <form method="POST">
            <input name="email" placeholder="Email Address" /><br>
            <input name="password" placeholder="Password" /><br>
            <input name="passwordConfirmation" placeholder="Password confirm" /><br>
            <button>Sign Up</button>
        </form>
      </div>
    `
    });
};