export const IndexFooter = () => {
  return (
    <footer className="index-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} BlogAre. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
          <a href="https://github.com/Rarejam/">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
