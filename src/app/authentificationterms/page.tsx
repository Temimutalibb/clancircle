function AuthentificationTerms() {
  return (
    <>
      <div>
        <div className=" bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 m-4  space-y-3 relative overflow-hidden">
          <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
            <div className="absolute bottom-6 left-7 text-white text-2xl">
              {"terms"}
            </div>
          </div>
          <div className=" text-violet-400 text-sm ">
            {"terms and condition"}
          </div>
          <h1 className="font-bold text-xl">
            Terms and Conditions for Authentication
          </h1>

          <h2 className="font-bold text-xl">Introduction</h2>
          <div className="text-sm text-zinc-500 leading-6">
            By using our application and opting for authentication via Facebook,
            Twitter, Google, or any other supported method, you agree to the
            following terms and conditions.
          </div>

          <h2 className="font-bold text-xl">Data Collection and Usage</h2>
          <div className="text-sm text-zinc-500 leading-6">
            <ul>
              <li>
                When you authenticate using any of the supported methods, we
                collect your public profile information, including your name,
                email address, and profile picture.
              </li>
              <li>
                This information is used solely for the purpose of creating and
                managing your account within our application.
              </li>
            </ul>
          </div>
          <h2 className="font-bold text-xl">Privacy</h2>
          <div className="text-sm text-zinc-500 leading-6">
            We respect your privacy and are committed to protecting your
            personal information. For more details, please refer to our Privacy
            Policy.
          </div>

          <h2 className="font-bold text-xl">Third-Party Services</h2>
          <div className="text-sm text-zinc-500 leading-6">
            Authentication services are provided by third-party providers
            (Facebook, Twitter, Google, etc.). By using these services, you also
            agree to their respective Terms of Service, Privacy Policy, Twitter
            Terms of Service, Twitter Privacy Policy, Google Terms of Service,
            and Google Privacy Policy.
          </div>
          <h2 className="font-bold text-xl">Account Security</h2>
          <div className="text-sm text-zinc-500 leading-6">
            You are responsible for maintaining the confidentiality of your
            account credentials. We are not liable for any unauthorized access
            to your account.
          </div>

          <h2 className="font-bold text-xl">Changes to Terms and Conditions</h2>
          <div className="text-sm text-zinc-500 leading-6">
            We reserve the right to update these terms and conditions at any
            time. Any changes will be posted on our website, and it is your
            responsibility to review them periodically.
          </div>

          <h2 className="font-bold text-xl">Contact Information</h2>
          <div className="text-sm text-zinc-500 leading-6">
            If you have any questions or concerns about these terms and
            conditions, please contact us at support@yourwebsite.com.
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthentificationTerms;
