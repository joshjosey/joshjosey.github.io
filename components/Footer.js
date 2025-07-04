class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
			<footer class="foot">
				<ul>
					<li>
						<a href="https://replit.com/@joshjosey">
							<img
								src="media/logos/replit.png"
								alt="Link to Josh's Replit page"
							/>
						</a>
					</li>
					<li>
						<a href="https://github.com/joshjosey">
							<img
								src="media/logos/github.png"
								alt="Link to Josh's Github page"
							/>
						</a>
					</li>
					<li>
						<a href="https://linkedin.com/in/josh-josey">
							<img
								src="media/logos/linkedin.png"
								alt="Link to Josh's Linkedin page"
							/>
						</a>
					</li>
				</ul>
			</footer>
    `;
  }
}

customElements.define("foot-bar", Footer);
