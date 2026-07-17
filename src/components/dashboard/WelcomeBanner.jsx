function WelcomeBanner() {
  const admin = JSON.parse(localStorage.getItem("admin"));

  return (
    <div className="welcome-banner mb-4">
      <div>
        <h2>Welcome Back 👋</h2>

        <p className="mb-0">
          Hello <strong>{admin?.name}</strong>, Welcome to LogicGyan Student
          Management System.
        </p>
      </div>

      <div className="welcome-logo">
        🎓
      </div>
    </div>
  );
}

export default WelcomeBanner;