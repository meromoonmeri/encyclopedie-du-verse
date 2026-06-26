/* ======================== GÉNÉRATEUR DE TECHNIQUES ======================== */

const arts = {
    elementaire: {
        name: 'Art Élémentaire',
        color: '#ff6b35',
        description: 'Manipulation des éléments primaires',
        intro: 'L\'Art Élémentaire canalise le Verse à travers les quatre éléments fondamentaux : le feu qui consume, l\'eau qui façonne, la terre qui soutient, et l\'air qui libère. Chaque technique transforme l\'énergie du Verse en manifestation élémentaire.'
    },
    combat: {
        name: 'Art Combat',
        color: '#c41e3a',
        description: 'Impulsion physique et martial',
        intro: 'L\'Art Combat concentre le Verse dans le corps, ampllifiant la force, la vitesse et l\'impact physique. Ces techniques transforment un combattant ordinaire en guerrier surhumain, capable de feits extraordinaires.'
    },
    interdit: {
        name: 'Art Interdit',
        color: '#2d1b69',
        description: 'Corruption et transformation du Verse',
        intro: 'L\'Art Interdit corrompt et dénature le Verse naturel. Ces techniques dangereuses transforment l\'énergie en chaos et abomination. Son étude est prohibée par les grands maîtres, mais certains chercheurs continuent en secret.'
    },
    runique: {
        name: 'Art Runique',
        color: '#1e90ff',
        description: 'Magie des anciens symboles',
        intro: 'L\'Art Runique canalise le Verse par les runes et les glyphes anciens. Chaque symbole possède un pouvoir unique, transmis depuis les âges antiques. C\'est la magie savante des savants et des archéologues.'
    },
    invisible: {
        name: 'Art Invisible',
        color: '#4b0082',
        description: 'Dissimulation et altération sensorielle',
        intro: 'L\'Art Invisible utilise le Verse pour altérer les sens et la perception. Les techniques de ce domaine dissimulent, illusionnent et brouillent la réalité. C\'est l\'art des espions et des illusionnistes.'
    },
    foi: {
        name: 'Art de la Foi',
        color: '#ffd700',
        description: 'Croyance divine et prière',
        intro: 'L\'Art de la Foi amplifie le Verse par la croyance et la dévotion. Plus la foi est forte, plus l\'effet est puissant. C\'est l\'art des prêtres, des moines et des croyants sincères.'
    },
    defendu: {
        name: 'Art Défendu',
        color: '#8b0000',
        description: 'Techniques prohibées et maudites',
        intro: 'L\'Art Défendu regroupe les techniques les plus dangereuses et les plus maudites. Aucune institution officielle n\'enseigne ces techniques. Elles sont perdues, détruites, ou gardées secrètement par des organisations souterraines.'
    }
};

const classifications = ['Offensive', 'Défensive', 'Soutien', 'Mobilité', 'Invocation', 'Renforcement', 'Soin', 'Contrôle', 'Hybridation'];
const natures = ['Elémentale', 'Physique', 'Mystique', 'Énergétique', 'Spirituelle', 'Maudite', 'Divine', 'Runique'];
const vectors = ['Corps', 'Mains', 'Voix', 'Symbole', 'Esprit', 'Arme', 'Environnement', 'Rituel'];
const ranges = ['Contact', 'Courte', 'Moyenne', 'Longue', 'Très longue', 'Libre'];
const ranks = ['F', 'E', 'D', 'C', 'B', 'A', 'S', 'S+'];

// Noms de techniques par art (à générer)
const techniqueNames = {
    elementaire: [],
    combat: [],
    interdit: [],
    runique: [],
    invisible: [],
    foi: [],
    defendu: []
};

const japaneseNames = {
    elementaire: ['炎撃', '水舞', '大地震', '風塵', '炎龍', '水晶', '地獄', '嵐'],
    combat: ['鋼拳', '流刀', '烈脚', '気斬', '瞬撃', '爆破', '圧倒', '昇竜'],
    interdit: ['邪眼', '呪咒', '暗黒', '堕落', '腐敗', '悪魔', '地獄火', '絶望'],
    runique: ['ルーン光', 'グリフ召', 'シール力', '魔紋', '古い力', 'マナ爆', '符文', '封印'],
    invisible: ['幻影', '影潜', '幻惑', '消影', '光曲', '影分', '錯覚', '無形'],
    foi: ['聖光', '祝福', '加護', '奇跡', '救済', '浄化', '神威', '天恵'],
    defendu: ['禁術', '秘呪', '封印破', '滅亡', '終焉', '黒呪', '破滅', '死滅']
};

/* ======================== GÉNÉRATEUR DE TECHNIQUES ======================== */
function generateTechniques() {
    const frenchParts = {
        elementaire: {
            first: ['Inferno', 'Aqua', 'Terra', 'Ventus', 'Flamme', 'Vague', 'Tremblement', 'Tempête'],
            second: ['Blitz', 'Surge', 'Quake', 'Gale', 'Burst', 'Tide', 'Shock', 'Strike']
        },
        combat: {
            first: ['Acier', 'Épée', 'Poing', 'Coup', 'Flux', 'Lame', 'Frappe', 'Éclair'],
            second: ['Briseur', 'Tranchant', 'Fracas', 'Torrent', 'Véloce', 'Coupant', 'Tonnerre', 'Impulsion']
        },
        interdit: {
            first: ['Mal', 'Ténèbre', 'Corruption', 'Chaotique', 'Abomination', 'Maudite', 'Démon', 'Vile'],
            second: ['Essence', 'Toucher', 'Curse', 'Chaos', 'Forme', 'Marque', 'Cri', 'Venom']
        },
        runique: {
            first: ['Runique', 'Glyphe', 'Sceau', 'Arcane', 'Symbole', 'Antique', 'Mystère', 'Enchantement'],
            second: ['Activation', 'Invocation', 'Lien', 'Pouvoir', 'Chaîne', 'Héritage', 'Connexion', 'Harmonie']
        },
        invisible: {
            first: ['Spectre', 'Ombre', 'Mirage', 'Phantôme', 'Illusion', 'Brume', 'Voile', 'Écho'],
            second: ['Danse', 'Toucher', 'Veil', 'Vision', 'Pied', 'Évanescence', 'Reflet', 'Murmure']
        },
        foi: {
            first: ['Lumière', 'Bénédiction', 'Sainte', 'Grâce', 'Divine', 'Prière', 'Céleste', 'Purification'],
            second: ['Éclat', 'Toucher', 'Brillance', 'Ascension', 'Salut', 'Émanation', 'Halo', 'Apothéose']
        },
        defendu: {
            first: ['Interdit', 'Ultime', 'Absolu', 'Calamité', 'Apocalypse', 'Profane', 'Innommable', 'Anéantissement'],
            second: ['Arcane', 'Destin', 'Perte', 'Fin', 'Annihilation', 'Oubli', 'Néant', 'Silence']
        }
    };

    let techniqueId = 1;

    for (const [artKey, artData] of Object.entries(arts)) {
        for (let i = 0; i < 200; i++) {
            const firstParts = frenchParts[artKey].first;
            const secondParts = frenchParts[artKey].second;
            const firstPart = firstParts[Math.floor(Math.random() * firstParts.length)];
            const secondPart = secondParts[Math.floor(Math.random() * secondParts.length)];
            
            const technique = {
                id: techniqueId,
                number: techniqueId,
                name: `${firstPart} ${secondPart}`,
                japanese: japaneseNames[artKey][Math.floor(Math.random() * japaneseNames[artKey].length)] + ' ' + (i + 1),
                subtitle: generateSubtitle(),
                branch: artKey,
                branchName: artData.name,
                classification: classifications[Math.floor(Math.random() * classifications.length)],
                nature: natures[Math.floor(Math.random() * natures.length)],
                vector: vectors[Math.floor(Math.random() * vectors.length)],
                range: ranges[Math.floor(Math.random() * ranges.length)],
                rank: ranks[Math.floor(Math.random() * ranks.length)],
                overview: generateOverview(artData.name, artKey),
                effects: generateEffects(3),
                functioning: generateFunctioning(4),
                weaknesses: generateWeaknesses(3),
                previousId: techniqueId > 1 ? techniqueId - 1 : null,
                nextId: techniqueId < 1400 ? techniqueId + 1 : null
            };

            techniqueNames[artKey].push(technique);
            techniqueId++;
        }
    }

    return techniqueNames;
}

function generateSubtitle() {
    const subtitles = [
        '« L\'essence du Verse »',
        '« Le pouvoir ultime »',
        '« L\'art suprême »',
        '« La transformation »',
        '« La liberation »',
        '« La domination »',
        '« L\'illumination »',
        '« L\'ascension »',
        '« La damnation »',
        '« Le sacrifice »',
        '« L\'éternité »',
        '« Le chaos »',
        '« L\'harmonie »',
        '« Le néant »',
        '« L\'infini »'
    ];
    return subtitles[Math.floor(Math.random() * subtitles.length)];
}

function generateOverview(artName, artKey) {
    const overviews = {
        elementaire: [
            'Technique de manipulation élémentaire qui canalise le Verse à travers les forces naturelles. L\'utilisateur transforme son énergie en élément tangible et le projette avec puissance.',
            'Une manifestation directe du pouvoir élémentaire, mêlant le Verse brut à la nature elle-même pour créer un effet dévastateur.',
            'Technique élémentaire d\'une grande pureté, capable de transformer l\'environnement instantanément.'
        ],
        combat: [
            'Technique de combat suprême qui renforce le corps physique avec le Verse. L\'utilisateur devient un véritable instrument de destruction.',
            'Une fusion parfaite entre le Verse et l\'impulsion physique, créant une attaque quasi imparable.',
            'Technique martiale qui canalise le Verse dans chaque mouvement, amplifiant la force et la précision.'
        ],
        interdit: [
            'Technique maudite qui corrompt le Verse naturel. Son utilisation entraîne des conséquences imprévisibles et souvent terrifiantes.',
            'Une abomination magique qui dénature la réalité elle-même. À ne jamais utiliser sans connaissance de ses risques.',
            'Technique interdite dont même le nom inspire la crainte. Elle transforme l\'utilisateur aussi bien que sa cible.'
        ],
        runique: [
            'Technique runique ancienne qui canalise le Verse par des symboles oubliés. Chaque rune possède un pouvoir unique hérité des âges antiques.',
            'Technique ésotérique basée sur l\'activation de glyphes anciens, transformant le Verse en puissance mystique.',
            'Une invocation des pouvoirs anciens, obtenue grâce à l\'étude et la compréhension des runes sacrées.'
        ],
        invisible: [
            'Technique d\'altération sensorielle qui utilise le Verse pour tromper l\'esprit et les sens. La réalité devient malléable.',
            'Une technique de dissimulation parfaite, utilisant le Verse pour devenir invisible aux yeux et à l\'esprit.',
            'Technique d\'illusion basée sur la canalisation du Verse pour créer des illusions quasi-tangibles.'
        ],
        foi: [
            'Technique divine alimentée par la foi et la croyance. Plus l\'utilisateur croit, plus son pouvoir est grand.',
            'Un miracle obtenu par la prière sincère, transformant le Verse en bénédiction céleste.',
            'Technique sainte qui canalise le Verse par la grâce divine, guérissant ou protégeant les croyants.'
        ],
        defendu: [
            'Technique absolument prohibée, trop dangereuse pour être enseignée. Son existence même est niée par les institutions officielles.',
            'Une technique ultime qui transcende les limites normales du Verse. Son utilisation est synonyme de fin.',
            'Technique maudite qui pose les questions morales les plus sombres. Même savoir qu\'elle existe, c\'est déjà trop.'
        ]
    };

    const artOverviews = overviews[artKey] || overviews.elementaire;
    return artOverviews[Math.floor(Math.random() * artOverviews.length)];
}

function generateEffects(count) {
    const effectTemplates = [
        'Augmente la puissance de %s% pendant %d secondes',
        'Crée une barrière de %d niveaux',
        'Invoque %d manifestations',
        'Réduit les dégâts subis de %s%',
        'Amplifie la portée de %d mètres',
        'Restaure %s% du Verse utilisé',
        'Paralyse l\'ennemi pour %d secondes',
        'Duplique l\'effet principal %d fois',
        'Augmente la vitesse de %s%',
        'Transforme %d éléments',
        'Crée un champ de %d mètres de rayon',
        'Multiplie l\'effet par %d',
        'Décuple la puissance de base',
        'Crée une chaîne de réaction %d fois',
        'Invoque la puissance des anciens'
    ];

    const effects = [];
    for (let i = 0; i < count; i++) {
        const template = effectTemplates[Math.floor(Math.random() * effectTemplates.length)];
        const effect = template
            .replace('%s', Math.floor(Math.random() * 100) + 20)
            .replace('%d', Math.floor(Math.random() * 10) + 1)
            .replace('%d', Math.floor(Math.random() * 10) + 1);
        effects.push(effect);
    }
    return effects;
}

function generateFunctioning(count) {
    const steps = [];
    const stepTemplates = [
        'Accumuler le Verse',
        'Former le vecteur d\'énergie',
        'Canaliser vers l\'objectif',
        'Libérer l\'énergie brute',
        'Activer le mécanisme',
        'Maintenir la concentration',
        'Amplifier l\'effet',
        'Finifier la transformation',
        'Projeter l\'énergie',
        'Consolider le résultat'
    ];

    for (let i = 0; i < count; i++) {
        steps.push(stepTemplates[Math.floor(Math.random() * stepTemplates.length)]);
    }
    return steps;
}

function generateWeaknesses(count) {
    const weaknessTemplates = [
        'Inefficace contre les utilisateurs ayant une affinité opposée',
        'Consomme beaucoup de Verse',
        'Nécessite une concentration intense',
        'Peut être contrée par une technique défensive spécifique',
        'Prend du temps pour être activée',
        'Imprévisible en environnement humide',
        'Moins efficace sous la pluie',
        'Nécessite un catalyseur',
        'Utilisation répétée provoque la fatigue mentale',
        'Impossible à utiliser en environnement noirci'
    ];

    const weaknesses = [];
    for (let i = 0; i < count; i++) {
        const weakness = weaknessTemplates[Math.floor(Math.random() * weaknessTemplates.length)];
        if (!weaknesses.includes(weakness)) {
            weaknesses.push(weakness);
        }
    }
    return weaknesses;
}

// Générer toutes les techniques
const allTechniques = generateTechniques();
let currentBranch = 'elementaire';
let currentTechniqueId = null;

// Aplatir la structure pour un accès facile
let allTechniquesFlat = [];
for (const branch in allTechniques) {
    allTechniquesFlat = allTechniquesFlat.concat(allTechniques[branch]);
}

/* ======================== NAVIGATION ======================== */
function showHome() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('home').classList.add('active');
    window.scrollTo(0, 0);
}

function showBranches() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('home').classList.add('active');
    window.scrollTo(0, 0);
}

function showBranch(branch) {
    currentBranch = branch;
    const branchData = arts[branch];
    const techniques = allTechniques[branch];

    document.getElementById('branch-title').textContent = branchData.name;
    document.getElementById('branch-description').textContent = branchData.description;
    document.getElementById('branch-intro').textContent = branchData.intro;
    document.getElementById('branch-header').style.borderColor = branchData.color;

    const tbody = document.getElementById('branch-body');
    tbody.innerHTML = '';

    techniques.forEach(tech => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${String(tech.number).padStart(4, '0')}</td>
            <td>${tech.name}</td>
            <td>${tech.japanese}</td>
            <td>${tech.classification}</td>
            <td>${tech.rank}</td>
            <td><button class="view-btn" onclick="showTechnique(${tech.id})">Voir</button></td>
        `;
        tbody.appendChild(row);
    });

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('branch').classList.add('active');
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
        document.getElementById('link-previous').onclick = () => showTechnique(prev.id);
    } else {
        document.getElementById('link-previous').textContent = '—';
    }

    if (technique.nextId) {
        const next = allTechniquesFlat.find(t => t.id === technique.nextId);
        document.getElementById('link-next').textContent = next.name;
        document.getElementById('link-next').onclick = () => showTechnique(next.id);
    } else {
        document.getElementById('link-next').textContent = '—';
    }

    document.getElementById('link-parent').textContent = '—';
    document.getElementById('link-derived').textContent = '—';

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('technique-detail').classList.add('active');
    
    // Changer la couleur de la page
    document.getElementById('technique-book').style.borderColor = branchData.color;
    
    window.scrollTo(0, 0);
}

function showIndex() {
    const tbody = document.getElementById('index-body');
    tbody.innerHTML = '';

    allTechniquesFlat.forEach(tech => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${String(tech.number).padStart(4, '0')}</td>
            <td><a href="#" onclick="showTechnique(${tech.id}); return false;" style="color: #d4af37; text-decoration: none; cursor: pointer;">${tech.name}</a></td>
            <td>${arts[tech.branch].name}</td>
            <td>${tech.classification}</td>
            <td>${tech.rank}</td>
        `;
        tbody.appendChild(row);
    });

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('index').classList.add('active');
    window.scrollTo(0, 0);
}

function showSearch() {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('search').classList.add('active');
    window.scrollTo(0, 0);
}

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
        row.innerHTML = `
            <td>${String(tech.number).padStart(4, '0')}</td>
            <td><a href="#" onclick="showTechnique(${tech.id}); return false;" style="color: #d4af37; text-decoration: none; cursor: pointer;">${tech.name}</a></td>
            <td>${arts[tech.branch].name}</td>
            <td>${tech.classification}</td>
            <td>${tech.rank}</td>
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
        resultsDiv.innerHTML = '<p style="color: #d4af37; text-align: center; padding: 2rem;">Aucune technique ne correspond à vos critères.</p>';
        return;
    }

    results.forEach(tech => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <div class="result-name" onclick="showTechnique(${tech.id})">${tech.name}</div>
            <div class="result-info">
                ${arts[tech.branch].name} • ${tech.classification} • Rang ${tech.rank}
            </div>
        `;
        resultItem.style.cursor = 'pointer';
        resultItem.onclick = () => showTechnique(tech.id);
        resultsDiv.appendChild(resultItem);
    });

    resultsDiv.innerHTML = `<p style="color: #d4af37; margin-bottom: 1rem;"><strong>${results.length} résultat${results.length > 1 ? 's' : ''} trouvé${results.length > 1 ? 's' : ''}</strong></p>` + resultsDiv.innerHTML;
}

/* ======================== TÉLÉCHARGEMENTS ======================== */
function downloadTechniqueDocx() {
    const tech = allTechniquesFlat.find(t => t.id === currentTechniqueId);
    if (!tech) return;

    // Créer un contenu HTML qui sera converti en document
    const content = `
        <h1>FICHE DE TECHNIQUE N° ${String(tech.number).padStart(3, '0')}</h1>
        <h2>${tech.japanese}</h2>
        <h2>${tech.name}</h2>
        <p><em>${tech.subtitle}</em></p>
        
        <h3>Vue d'ensemble</h3>
        <p>${tech.overview}</p>
        
        <h3>Effets</h3>
        <ul>
        ${tech.effects.map(e => `<li>${e}</li>`).join('')}
        </ul>
        
        <h3>Fonctionnement</h3>
        <ol>
        ${tech.functioning.map(f => `<li>${f}</li>`).join('')}
        </ol>
        
        <h3>Faiblesses</h3>
        <ul>
        ${tech.weaknesses.map(w => `<li>${w}</li>`).join('')}
        </ul>
        
        <h3>Données Générales</h3>
        <table border="1">
            <tr><td>Nom</td><td>${tech.name}</td></tr>
            <tr><td>Classification</td><td>${tech.classification}</td></tr>
            <tr><td>Nature</td><td>${tech.nature}</td></tr>
            <tr><td>Vecteur</td><td>${tech.vector}</td></tr>
            <tr><td>Portée</td><td>${tech.range}</td></tr>
        </table>
        
        <h3>Liens</h3>
        <table border="1">
            <tr><td>Branche</td><td>${arts[tech.branch].name}</td></tr>
        </table>
        
        <h3>Progression</h3>
        <p>F - E - D - C - B - A - S - S+</p>
    `;

    const element = document.createElement('a');
    const file = new Blob([content], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = `Technique_${tech.number}_${tech.name.replace(/ /g, '_')}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function downloadBranchDocx() {
    const techniques = allTechniques[currentBranch];
    const branchName = arts[currentBranch].name;
    
    let content = `<h1>${branchName}</h1><h2>Sommaire des Techniques</h2><ul>`;
    
    techniques.forEach(tech => {
        content += `<li>${tech.number}. ${tech.name}</li>`;
    });
    
    content += '</ul>';

    const element = document.createElement('a');
    const file = new Blob([content], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = `Branche_${branchName.replace(/ /g, '_')}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function downloadBranchPdf() {
    alert('Fonctionnalité PDF en développement. Pour l\'instant, utilisez le téléchargement HTML.');
}