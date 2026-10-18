const attractions = [
	{
		name: "Poctoy White Beach",
		location: "Torrijos",
		category: "Sea",
		label: "Sea & sand",
		description: "A long sweep of pale sand and clear water, with Mount Malindig on the horizon.",
		image: "https://4.bp.blogspot.com/-OwfShahXC44/WbICTlMAxtI/AAAAAAAAU58/LSOoRgh8B78f5Q2ns1blHBydSKFwtdAgQCLcBGAs/s1600/malindig.jpg",
		alt: "White sand beach edged by clear tropical water"
	},
	{
		name: "Tres Reyes Islands",
		location: "Gasan",
		category: "Sea",
		label: "Island hopping",
		description: "Three small islands just offshore, known for snorkeling, swimming, and quiet coves.",
		image: "https://atmosphereresorts.com/wp-content/uploads/2016/04/Apo-island-reef.webp",
		alt: "Blue ocean waves rolling toward a tropical island"
	},
	{
		name: "Maniwaya Island",
		location: "Santa Cruz",
		category: "Sea",
		label: "Sea & sand",
		description: "A laid-back island escape with bright beaches, sandbars, and inviting turquoise sea.",
		image: "https://outoftownblog.com/wp-content/uploads/2016/04/Maniwaya-Island-in-Marinduque-photo-by-@kayperzy-IG-700x482.jpg",
		alt: "Sunlight shimmering across a turquoise shoreline"
	},
	{
		name: "Bathala Caves",
		location: "Santa Cruz",
		category: "Nature",
		label: "Nature",
		description: "A cluster of limestone caves surrounded by forest, with striking rock formations to explore.",
		image: "https://i.ytimg.com/vi/POeY4cjdQ2w/maxresdefault.jpg",
		alt: "Sunlight filtering through a dense tropical forest"
	},
	{
		name: "Paadjao Falls",
		location: "Gasan",
		category: "Nature",
		label: "Nature",
		description: "A peaceful waterfall tucked into green countryside, a refreshing stop after a scenic walk.",
		image: "https://i.ytimg.com/vi/WBWldIUXq04/maxresdefault.jpg",
		alt: "Waterfall dropping into a green forest pool"
	},
	{
		name: "Boac Cathedral",
		location: "Boac",
		category: "Culture",
		label: "Heritage",
		description: "A centuries-old hilltop church overlooking the town, with a storied stone facade.",
		image: "https://lh4.ggpht.com/-6wr-Oc6EEQ4/Th_WpoA-QHI/AAAAAAAACag/u8_aG5k6Jl0/20110420-MARINDUQUE-D80-0078%25255B3%25255D.jpg?imgmax=800",
		alt: "Historic stone church with classical architecture"
	},
	{
		name: "Mount Malindig",
		location: "Buenavista",
		category: "Nature",
		label: "Mountain",
		description: "A volcanic mountain in southern Marinduque and the island's highest peak.",
		image: "https://th.bing.com/th/id/OIP.UHW0AQeTI1kFcu4B5gjbEwHaEK?w=271&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
		alt: "Illustrative view of a forested mountain landscape"
	},
	{
		name: "Luzon Datum of 1911",
		location: "Mogpog",
		category: "Culture",
		label: "Heritage",
		description: "A geodetic reference station in Balanacan, Mogpog, marking the Luzon Datum of 1911.",
		image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8pF3z_OV_FEoHXMyVylxCaIcikGZ88l9UoF_-4nQbFOfZZoP99Bxsrdeos4IfPukqr7Ah19lOcZ_fj-YzUBiSDGDYxytGMJoFI8aAuqCIQNTmGeOXuSXLJ9vy8loRNThrj7hm3lX4NFVfntpwaw5UCv6GmnCWX_1DQqmdWAH_TA8PzkL_cnTtyPvNfLIG/w1200-h630-p-k-no-nu/Luzon%20Datum%20of%201911%20The%20Geodetical%20Center%20of%20the%20Philippines%20Marinduque.jpg",
		alt: "Illustrative view of a historic stone landmark"
	},
	{
		name: "Immaculate Conception Church",
		location: "Mogpog",
		category: "Culture",
		label: "Heritage",
		description: "A Catholic parish church in Mogpog dedicated to the Immaculate Conception.",
		image: "https://th.bing.com/th/id/R.2b0e28378b0afd9b3f000e0b46115686?rik=X3%2fs78xfnGLd%2fw&riu=http%3a%2f%2fgalapamore.weebly.com%2fuploads%2f2%2f5%2f2%2f5%2f25252920%2f2377501.jpg&ehk=nIuO5n1NQYD3RD00nBlFMIfUSzK0O3rXmVsFRsi2JlY%3d&risl=&pid=ImgRaw&r=0",
		alt: "Illustrative view of a historic church"
	},
	{
		name: "St. Joseph the Worker Church",
		location: "Gasan",
		category: "Culture",
		label: "Heritage",
		description: "A Catholic parish church in Gasan dedicated to St. Joseph the Worker.",
		image: "https://fastly.4sqi.net/img/general/600x600/59461389_EuWNmaxSYu4C_8RmVmZakwZP1iWlTfZK2kiugERTCGg.jpg",
		alt: "Illustrative view of a historic church"
	}
];

const grid = document.querySelector("#attraction-grid");
const searchInput = document.querySelector("#search");
const count = document.querySelector("#results-count");
const emptyState = document.querySelector("#empty-state");
const filterButtons = document.querySelectorAll(".filter-button");
let activeFilter = "All";

function renderAttractions() {
	const query = searchInput.value.trim().toLowerCase();
	const visibleAttractions = attractions.filter((attraction) => {
		const matchesFilter = activeFilter === "All" || attraction.category === activeFilter;
		const matchesQuery = `${attraction.name} ${attraction.location} ${attraction.description}`.toLowerCase().includes(query);
		return matchesFilter && matchesQuery;
	});

	grid.innerHTML = visibleAttractions.map((attraction) => `
		<article class="attraction-card">
			<div class="card-image-wrap">
				<img class="card-image" src="${attraction.image}" alt="${attraction.alt}" loading="lazy">
				<span class="card-category">${attraction.label}</span>
			</div>
			<div class="card-body">
				<p class="card-location">${attraction.location} · Marinduque</p>
				<h3 class="card-title">${attraction.name}</h3>
				<p class="card-description">${attraction.description}</p>
			</div>
		</article>
	`).join("");

	count.textContent = `${visibleAttractions.length} ${visibleAttractions.length === 1 ? "place" : "places"}`;
	emptyState.hidden = visibleAttractions.length > 0;
}

filterButtons.forEach((button) => {
	button.addEventListener("click", () => {
		activeFilter = button.dataset.filter;
		filterButtons.forEach((filterButton) => {
			const isActive = filterButton === button;
			filterButton.classList.toggle("is-active", isActive);
			filterButton.setAttribute("aria-pressed", String(isActive));
		});
		renderAttractions();
	});
});

searchInput.addEventListener("input", renderAttractions);
document.querySelector("#year").textContent = new Date().getFullYear();
renderAttractions();
