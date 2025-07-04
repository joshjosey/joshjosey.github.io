class NavBar extends HTMLElement {
  constructor() {
    super()
  }

	connectedCallback() {
    this.innerHTML = `
			<header>
				<nav class="navbar">
					<div class="logo">
						<h1>
							Josh Josey
						</h1>
					</div>
					<ul>
						<li>
							<a href="$">About</a>
						</li>
						<li>
							<a href="$">Resume</a>
						</li>
						<li>
							<a href="$">Projects</a>
						</li>
					</ul>
				</nav>
			</header>
    `
  }
}

customElements.define("nav-bar", NavBar)
