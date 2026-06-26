/* ======================== FONCTIONS DE NAVIGATION ======================== */

function showHome() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('home').classList.add('active');
    updateNavLinks('home');
    window.scrollTo(0, 0);
}

function showBranch(branch) {
    currentBranch = branch;
    const branchData = arts[branch];
    const techniques = allTechniques[branch];

    document.getElementById('branch-title').textContent = branchData.name;
    document.getElementById('branch-description').textContent = branchData.description;
    document.getElementById('branch-intro').textContent = branchData.intro;
    
    // Changer les couleurs de la branche
    const branchHeader = document.getElementById('branch-header');
    branchHeader.style.borderBottomColor = branchData.color;
    branchHeader.style.color = branchData.color;

    const tbody = document.getElementById('branch-body');
    tbody.innerHTML = '';

    techniques.forEach(tech => {
        const row = document.createElement('tr');
        row.style.cursor = 'pointer';
        row.innerHTML = `
            <td>${String(tech.number).padStart(4, '0')}</td>
            <td>${tech.name}</td>
            <td>${tech.japanese}</td>
            <td>${tech.classification}</td>
            <td><span style="background: ${branchData.color}; color: #000; padding: 0.2rem 0.5rem; border-radius: 3px; font-weight: bold;">${tech.rank}</span></td>
            <td><button class="view-btn" onclick="event.stopPropagation(); showTechnique(${tech.id})">👁️ Voir</button></td>
        `;
        row.onclick = () => showTechnique(tech.id);
        tbody.appendChild(row);
    });

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('branch').classList.add('active');
    updateNavLinks('branch');
    window.scrollTo(0, 0);
}

function showTechnique(id) {
    const technique = allTechniquesFlat.find(t => t.id === id);
    if (!technique) return;

    currentTechniqueId = id;
    const branchData = arts[technique.branch];

    // Remplir les données
    document.getElementById('technique-number-display').textContent = String(technique.number).padStart(3, '0');
    document.getElementById('technique-japanese').textContent = technique.japanese;
    document.getElementById('technique-name').textContent = technique.name;
    document.getElementById('technique-subtitle').textContent = technique.subtitle;
    
    document.getElementById('technique-overview').textContent = technique.overview;
    
    const effectsList = document.getElementById('technique-effects');
    effectsList.innerHTML = '';
    technique.effects.forEach(effect => {
        const li = document.createElement('li');
        li.textContent = effect;
        effectsList.appendChild(li);
    });

    const functioningList = document.getElementById('technique-functioning');
    functioningList.innerHTML = '';
    technique.functioning.forEach((step, idx) => {
        const li = document.createElement('li');
        li.textContent = step;
        functioningList.appendChild(li);
    });

    const weaknessesList = document.getElementById('technique-weaknesses');
    weaknessesList.innerHTML = '';
    technique.weaknesses.forEach(weakness => {
        const li = document.createElement('li');
        li.textContent = weakness;
        weaknessesList.appendChild(li);
    });

    // Données générales
    document.getElementById('data-name').textContent = technique.name;
    document.getElementById('data-classification').textContent = technique.classification;
    document.getElementById('data-nature').textContent = technique.nature;
    document.getElementById('data-vector').textContent = technique.vector;
    document.getElementById('data-range').textContent = technique.range;

    // Liens
    document.getElementById('link-branch').textContent = branchData.name;
    
    if (technique.previousId) {
        const prev = allTechniquesFlat.find(t => t.id === technique.previousId);
        document.getElementById('link-previous').textContent = prev.name;
        document.getElementById('link-previous').onclick = (e) => {
            e.preventDefault();
            showTechnique(prev.id);
            return false;
        };
    } else {
        document.getElementById('link-previous').textContent = '—';
    }

    if (technique.nextId) {
        const next = allTechniquesFlat.find(t => t.id === technique.nextId);
        document.getElementById('link-next').textContent = next.name;
        document.getElementById('link-next').onclick = (e) => {
            e.preventDefault();
            showTechnique(next.id);
            return false;
        };
    } else {
        document.getElementById('link-next').textContent = '—';
    }

    document.getElementById('link-parent').textContent = '—';
    document.getElementById('link-derived').textContent = '—';

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('technique-detail').classList.add('active');
    
    // Changer les couleurs de la page
    const bookWrapper = document.getElementById('technique-book');
    bookWrapper.style.borderColor = branchData.color;
    document.querySelectorAll('.technique-page').forEach(page => {
        page.style.borderColor = branchData.color;
    });
    
    updateNavLinks('technique');
    window.scrollTo(0, 0);
}

function showIndex() {
    const tbody = document.getElementById('index-body');
    tbody.innerHTML = '';

    allTechniquesFlat.forEach(tech => {
        const row = document.createElement('tr');
        row.style.cursor = 'pointer';
        row.innerHTML = `
            <td>${String(tech.number).padStart(4, '0')}</td>
            <td><a href="#" onclick="showTechnique(${tech.id}); return false;" style="color: #d4af37; text-decoration: none; cursor: pointer;">${tech.name}</a></td>
            <td>${arts[tech.branch].name}</td>
            <td>${tech.classification}</td>
            <td><span style="background: ${arts[tech.branch].color}; color: #000; padding: 0.2rem 0.5rem; border-radius: 3px; font-weight: bold;">${tech.rank}</span></td>
        `;
        tbody.appendChild(row);
    });

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('index').classList.add('active');
    updateNavLinks('index');
    window.scrollTo(0, 0);
}

function showSearch() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('search').classList.add('active');
    updateNavLinks('search');
    window.scrollTo(0, 0);
}

function updateNavLinks(currentPage) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    if (currentPage === 'home') {
        document.querySelectorAll('.nav-link')[0].classList.add('active');
    } else if (currentPage === 'index') {
        document.querySelectorAll('.nav-link')[1].classList.add('active');
    } else if (currentPage === 'branch') {
        document.querySelectorAll('.nav-link')[2].classList.add('active');
    } else if (currentPage === 'search') {
        document.querySelectorAll('.nav-link')[3].classList.add('active');
    }
}

/* ======================== FILTRAGE & TRI ======================== */
function filterIndex() {
    const input = document.getElementById('index-search-input').value.toLowerCase();
    const rows = document.getElementById('index-body').querySelectorAll('tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(input) ? '' : 'none';
    });
}

function sortIndex() {
    const sortBy = document.getElementById('index-sort').value;
    let sorted = [...allTechniquesFlat];

    if (sortBy === 'number') {
        sorted.sort((a, b) => a.id - b.id);
    } else if (sortBy === 'name') {
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'branch') {
        sorted.sort((a, b) => a.branch.localeCompare(b.branch));
    } else if (sortBy === 'rank') {
        const rankOrder = ['F', 'E', 'D', 'C', 'B', 'A', 'S', 'S+'];
        sorted.sort((a, b) => rankOrder.indexOf(a.rank) - rankOrder.indexOf(b.rank));
    }

    const tbody = document.getElementById('index-body');
    tbody.innerHTML = '';

    sorted.forEach(tech => {
        const row = document.createElement('tr');
        row.style.cursor = 'pointer';
        row.innerHTML = `
            <td>${String(tech.number).padStart(4, '0')}</td>
            <td><a href="#" onclick="showTechnique(${tech.id}); return false;" style="color: #d4af37; text-decoration: none; cursor: pointer;">${tech.name}</a></td>
            <td>${arts[tech.branch].name}</td>
            <td>${tech.classification}</td>
            <td><span style="background: ${arts[tech.branch].color}; color: #000; padding: 0.2rem 0.5rem; border-radius: 3px; font-weight: bold;">${tech.rank}</span></td>
        `;
        tbody.appendChild(row);
    });
}

function performSearch() {
    const name = document.getElementById('search-name').value.toLowerCase();
    const branch = document.getElementById('search-branch').value;
    const classification = document.getElementById('search-classification').value;
    const rank = document.getElementById('search-rank').value;

    let results = allTechniquesFlat.filter(tech => {
        return (name === '' || tech.name.toLowerCase().includes(name)) &&
               (branch === '' || tech.branch === branch) &&
               (classification === '' || tech.classification === classification) &&
               (rank === '' || tech.rank === rank);
    });

    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p style="color: #d4af37; text-align: center; padding: 2rem; font-style: italic;">Aucune technique ne correspond à vos critères de recherche.</p>';
        return;
    }

    let html = `<p style="color: #d4af37; margin-bottom: 1.5rem; border-bottom: 2px solid #d4af37; padding-bottom: 1rem;"><strong>✦ ${results.length} résultat${results.length > 1 ? 's' : ''} trouvé${results.length > 1 ? 's' : ''} ✦</strong></p>`;
    
    results.forEach(tech => {
        const artColor = arts[tech.branch].color;
        html += `
            <div class="search-result-item" onclick="showTechnique(${tech.id})" style="border-left-color: ${artColor};">
                <div class="result-name" style="color: ${artColor};">${tech.name}</div>
                <div class="result-info">
                    ${arts[tech.branch].name} • ${tech.classification} • Rang <span style="background: ${artColor}; color: #000; padding: 0.2rem 0.4rem; border-radius: 2px; font-weight: bold;">${tech.rank}</span>
                </div>
            </div>
        `;
    });

    resultsDiv.innerHTML = html;
}

/* ======================== TÉLÉCHARGEMENTS ======================== */
async function downloadTechniqueDocx() {
    const tech = allTechniquesFlat.find(t => t.id === currentTechniqueId);
    if (!tech) return;

    alert('📥 Téléchargement de: ' + tech.name + '\n\nFonctionnalité en développement. Utilisez le bouton "Imprimer" de votre navigateur pour sauvegarder en PDF.');
}

function downloadBranchDocx() {
    const techniques = allTechniques[currentBranch];
    const branchName = arts[currentBranch].name;
    
    alert(`📥 Téléchargement de la branche: ${branchName}\n(${techniques.length} techniques)\n\nFonctionnalité en développement.`);
}

function downloadBranchPdf() {
    const branchName = arts[currentBranch].name;
    alert(`📄 Aperçu de: ${branchName}\n\nFonctionnalité en développement. Utilisez Ctrl+P pour imprimer.`);
}

/* ======================== INITIALISATION ======================== */
document.addEventListener('DOMContentLoaded', function() {
    showHome();
});