// ============================================================
//  LAPORAN PEMASANGAN - SCRIPT.JS  (Revisi 2)
// ============================================================

// ─── SPLASH SCREEN ───────────────────────────────────────────
(function() {
  function hideSplash() {
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.classList.add('hidden');
      setTimeout(() => splash.remove(), 600);
    }
  }
  // Hide after 1.5s - OS splash already showed, this just carries it through
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(hideSplash, 1500));
  } else {
    setTimeout(hideSplash, 1500);
  }
})();

// ─── DATA ────────────────────────────────────────────────────
const DATA = {
  areas: ['Banyumas', 'Cilacap', 'Herman', 'Kebumen', 'Rowokele'],

  areaIcons: {
    Banyumas: '🌿', Cilacap: '🌊', Herman: '⭐', Kebumen: '🏔️', Rowokele: '🌄'
  },

  areaDesc: {
    Banyumas: 'BMS · bms.wifian.net.id',
    Cilacap:  'CLP · clp.wifian.net.id',
    Herman:   'CLP · clp.wifian.net.id',
    Kebumen:  'KBM · kbm.wifian.net.id',
    Rowokele: 'RKW · rkw.wifian.net.id'
  },

  idSuffix: {
    Banyumas: '@bms.wifian.net.id',
    Cilacap:  '@clp.wifian.net.id',
    Herman:   '@clp.wifian.net.id',
    Kebumen:  '@kbm.wifian.net.id',
    Rowokele: '@rkw.wifian.net.id'
  },

  // OLT otomatis sesuai area; Herman → Cilacap
  oltDefault: {
    Banyumas: 'BANYUMAS',
    Cilacap:  'CILACAP',
    Herman:   'CILACAP',
    Kebumen:  'KEBUMEN',
    Rowokele: 'ROWOKELE'
  },

  bandwidth: {
    Banyumas: [
      'HELIUM 50Mbps - Rp 170.000',
      'HELIUM 100Mbps - Rp 280.000',
      'HELIUM 50Mbps DISCOUNT - Rp 115.000',
      'HELIUM 50Mbps FREE - Rp 0',
      'PROMO 3 BULAN PERTAMA 50Mbps - Rp 20.000',
      'PAKET 2026 PROMO 100Mbps - Rp 150.000',
      'PAKET 2026 PROMO 3 BULAN 100Mbps - Rp 100.000',
      'PROMO 9 BULAN 50Mbps - Rp 115.000',
      'PAKET PROMO 3 BULAN PERTAMA 100Mbps - Rp 30.000',
      'PAKET PROMO 9 BULAN 100Mbps - Rp 170.000',
      'PAKET SOHO 100Mbps - Rp 500.000'
    ],
    Cilacap: [
      'HELIUM 50Mbps - Rp 170.000',
      'HELIUM 100Mbps - Rp 280.000',
      'HELIUM 50Mbps DISCOUNT - Rp 115.000',
      'HELIUM 50Mbps FREE - Rp 0',
      'PROMO 3 BULAN AWAL - Rp 20.000',
      'PAKET 2026 PROMO 100Mbps - Rp 150.000',
      'PAKET 2026 PROMO 3 BULAN 100Mbps - Rp 100.000'
    ],
    Herman: [
      'HELIUM GRATIS 1 TAHUN - Rp 20.000',
      'PAKET FREE 50 MBPS - Rp 0'
    ],
    Kebumen: [
      'PROMO TAHUNAN 3 BULAN PERTAMA 50Mbps - Rp 20.000',
      'PROMO TAHUNAN 3 BULAN PERTAMA 100Mbps - Rp 30.000',
      'PROMO 9 BULAN 50Mbps - Rp 115.000',
      'PROMO 9 BULAN 100Mbps - Rp 170.000',
      'PAKET 50 MBPS - Rp 175.000',
      'PAKET 2026 PROMO 3 BULAN 100Mbps - Rp 100.000',
      'PAKET 2026 PROMO 100Mbps - Rp 150.000',
      'HELIUM 70Mbps - Rp 200.000',
      'HELIUM 50Mbps - Rp 180.000',
      'HELIUM 50 MBPS FREE - Rp 0'
    ],
    Rowokele: [
      'PROMO 9 BULAN 100Mbps - Rp 150.000',
      'PROMO 3 BULAN 100Mbps - Rp 100.000',
      'HELIUM 50Mbps FREE - Rp 0',
      'SINTEL 100Mbps - Rp 280.000',
      'SINTEL 50Mbps - Rp 170.000',
      'PROMO 1 TAHUN - Rp 20.000'
    ]
  },

  marketing: {
    Banyumas: ['Anto Sejariyanto', 'Paryo Prayogi', 'Sarno'],
    Cilacap:  ['Kundarto'],
    Herman:   ['Herman'],
    Kebumen:  ['Gatot n Fitrianto'],
    Rowokele: ['Fitriyanto n Gatot']
  },

  koordinator: {
    Banyumas: [
      'Muarif Anto','Handoko3','Nur Khasan-Anto','Sapto Handoko','Achmad Saadi',
      'Bejo','Shoudy Bagus Larado','Bumdes Karag','Kaliwedi Diman','Sarno',
      'Ahida barid Asmara','Budi Martono','Mukhafid','Sukirno','Krisna',
      'Syaiful Mumin','Agus Hariwibowo','Herman','Moh Amir Syarifuddin',
      'Musolih','Nur Khasanah','Imam Fauzi','Suparman','Joenarto Tri Djoko Soetiksno',
      'Fiat Aldila','Jumadi Abdillah','Bumdes Sidasari','Sapto Handoko Bumdes Sidamulya',
      'Hari Irawan','Nur Khasan-Prayogi','Mohammad Ali Makruf','Bambang Sudi',
      'Kuat Widodo','Yatiman Yulianto','Lusi Eka Susanti','Kaliwedi Baha',
      'Puthut Handoko','Naslim Gunungnangka','Budi Santoso','Dyah Agus Purwani',
      'Siswoyo','Bumdes Bangsa','Amira','Alasmalang Bumdes','Adisana KUD Kebasen'
    ],
    Cilacap:  ['Ahmad Romli','Herman','Suherman'],
    Herman:   ['Herman'],
    Kebumen:  [
      'Juni Aminudin','Salsabila Setiawan','Aditya Wibowo','Wahyu Andi Saputra',
      'Poniran','Hermanto','Fadhilah Mustaqim','Budi Harsono','Farid Ibnu Hayyan',
      'Gatot Setiawan','Fitriyanto','Elok Faiqoh','Silvia Indriani','Oki Kaswoyo',
      'Surip','Caturiyani Anugrahwati','Darmanto','Supriyono','Margijono,AM.TEM.',
      'Is Setyadi','Candra Edi Wahyono'
    ],
    Rowokele: [
      'Dahori','Chomsiyatun','Andika Tri Wibowo','Sulasih','Gatot Setiawan',
      'Supendi','Nugraha Era Pamungkas','Wiratama Aji Pamungkas','Edi Pranoto','Nur Chamid'
    ]
  },

  statusTempat: ['RUMAH SENDIRI','KONTRAKAN','KOST','APARTEMEN','INSTANSI']
};

// ─── STATE ───────────────────────────────────────────────────
let selectedArea = null;
let koordinatorValue = '';

// ─── HELPERS ─────────────────────────────────────────────────

/** Extract only http/https URL from messy textarea */
function extractURL(text) {
  if (!text || !text.trim()) return '-';
  const match = text.match(/https?:\/\/[^\s\n\r]+/i);
  return match ? match[0].trim() : text.trim();
}

/** Normalize WA: strip formatting, +62/62 → 08xxx */
function normalizeWA(raw) {
  if (!raw || !raw.trim()) return '-';
  let num = raw.trim().replace(/[\s\-().]/g, '');
  if (num.startsWith('+62')) num = '0' + num.slice(3);
  else if (num.startsWith('62') && num.length > 10) num = '0' + num.slice(2);
  return num;
}

/** Strip domain suffix if user typed it already */
function normalizeIdPelanggan(rawInput, suffix) {
  if (!rawInput || !rawInput.trim()) return '-';
  let val = rawInput.trim();
  if (val.includes('@')) val = val.split('@')[0];
  return val + suffix;
}

/**
 * Normalize RT/RW:
 *   "01/01" | "rt 01/01" | "rt 01/rw 01" | "RT 01 / RW 01"
 *   → "RT 01 RW 01"
 */
function normalizeRTRW(raw) {
  if (!raw || !raw.trim()) return '';
  const s = raw.trim();
  // Match pattern: optional "RT" then number, optional "RW" then number
  const match = s.match(/(?:rt\s*)?(\d+)\s*[/\-]\s*(?:rw\s*)?(\d+)/i);
  if (match) {
    return `RT ${match[1].padStart(2,'0')} RW ${match[2].padStart(2,'0')}`;
  }
  return s.toUpperCase();
}

/**
 * Normalize Desa/Kelurahan:
 *   "bangsa" → "DESA BANGSA"
 *   "desa bangsa" → "DESA BANGSA"   (no duplication)
 *   "kelurahan bangsa" → "KELURAHAN BANGSA"
 */
function normalizeDesa(raw) {
  if (!raw || !raw.trim()) return '';
  const s = raw.trim().toUpperCase();
  if (s.startsWith('DESA ') || s.startsWith('KELURAHAN ') || s.startsWith('KEL ')) return s;
  return 'DESA ' + s;
}

/**
 * Normalize Kecamatan:
 *   "kroya" -> "KECAMATAN KROYA"
 *   "kec kroya" -> "KECAMATAN KROYA"
 */
function normalizeKecamatan(raw) {
  if (!raw || !raw.trim()) return '';
  let s = raw.trim().toUpperCase();
  if (s.startsWith('KECAMATAN ')) return s;
  if (s.startsWith('KEC ')) return s.replace('KEC ', 'KECAMATAN ');
  return 'KECAMATAN ' + s;
}

/** Build full address */
function buildAlamat(jalan, rtRw, desa, kecamatan) {
  const parts = [];
  if (jalan && jalan.trim()) parts.push(jalan.trim().toUpperCase());
  const rtrwNorm = normalizeRTRW(rtRw);
  if (rtrwNorm) parts.push(rtrwNorm);
  const desaNorm = normalizeDesa(desa);
  if (desaNorm) parts.push(desaNorm);
  const kecNorm = normalizeKecamatan(kecamatan);
  if (kecNorm) parts.push(kecNorm);
  return parts.join(' ') || '-';
}

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function formatDate(iso) {
  if (!iso) return '-';
  const date = new Date(iso);
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  
  const dayName = days[date.getDay()];
  const day = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${dayName},${day} ${monthName} ${year}`;
}

function up(v) {
  if (!v || v === '-') return '-';
  return v.toString().toUpperCase();
}

// ─── POPULATE DROPDOWNS ───────────────────────────────────────
function populateSelect(id, options, placeholder) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `<option value="">${placeholder}</option>`;
  options.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt;
    o.textContent = opt;
    el.appendChild(o);
  });
}

// ─── SEARCHABLE SELECT (Koordinator) ─────────────────────────
let searchDropdownOpen = false;
let searchDropdownEl = null;
let searchTriggerEl = null;

function buildSearchableSelect(options) {
  koordinatorValue = '';
  const trigger = document.getElementById('koordinator-trigger');
  const dropdown = document.getElementById('koordinator-dropdown');
  const input = document.getElementById('koordinator-search');
  const list = document.getElementById('koordinator-list');

  trigger.querySelector('.trigger-text').textContent = '— Pilih Koordinator —';
  trigger.querySelector('.trigger-text').classList.remove('selected-val');

  renderSearchOptions(options, '');

  // Reset search
  input.value = '';

  // Listeners (remove old ones by cloning)
  const newTrigger = trigger.cloneNode(true);
  trigger.parentNode.replaceChild(newTrigger, trigger);
  searchTriggerEl = newTrigger;
  searchDropdownEl = dropdown;

  newTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSearchDropdown(options);
  });

  const newInput = dropdown.querySelector('#koordinator-search');
  newInput.addEventListener('input', () => {
    renderSearchOptions(options, newInput.value);
  });
  newInput.addEventListener('click', e => e.stopPropagation());
}

function renderSearchOptions(options, query) {
  const list = document.getElementById('koordinator-list');
  const q = query.toLowerCase().trim();
  const filtered = q ? options.filter(o => o.toLowerCase().includes(q)) : options;

  list.innerHTML = '';
  if (!filtered.length) {
    list.innerHTML = '<div class="search-select-option no-result">Tidak ditemukan</div>';
    return;
  }

  filtered.forEach(opt => {
    const div = document.createElement('div');
    div.className = 'search-select-option' + (opt === koordinatorValue ? ' selected' : '');
    div.textContent = opt;
    div.addEventListener('click', (e) => {
      e.stopPropagation();
      koordinatorValue = opt;
      const txt = document.querySelector('#koordinator-trigger .trigger-text');
      if (txt) {
        txt.textContent = opt;
        txt.classList.add('selected-val');
      }
      closeSearchDropdown();
    });
    list.appendChild(div);
  });
}

function toggleSearchDropdown(options) {
  const dropdown = document.getElementById('koordinator-dropdown');
  const trigger = document.getElementById('koordinator-trigger');
  if (!dropdown || !trigger) return;

  if (dropdown.classList.contains('open')) {
    closeSearchDropdown();
    return;
  }

  // CSS handles positioning (top: 100%)

  dropdown.classList.add('open');
  trigger.classList.add('open');
  searchDropdownOpen = true;

  // Focus search input
  setTimeout(() => {
    const inp = document.getElementById('koordinator-search');
    if (inp) inp.focus();
  }, 60);

  renderSearchOptions(options, '');
  if (document.getElementById('koordinator-search')) {
    document.getElementById('koordinator-search').value = '';
  }
}

function closeSearchDropdown() {
  const dropdown = document.getElementById('koordinator-dropdown');
  const trigger = document.getElementById('koordinator-trigger');
  if (dropdown) dropdown.classList.remove('open');
  if (trigger) trigger.classList.remove('open');
  searchDropdownOpen = false;
}

// Close on outside click
document.addEventListener('click', (e) => {
  if (searchDropdownOpen) {
    const dropdown = document.getElementById('koordinator-dropdown');
    if (dropdown && !dropdown.contains(e.target)) {
      closeSearchDropdown();
    }
  }
});

// ─── REFRESH ALL DROPDOWNS FOR AREA ──────────────────────────
function refreshDropdowns(area) {
  populateSelect('bandwidth', DATA.bandwidth[area], '— Pilih Paket —');
  populateSelect('marketing', DATA.marketing[area], '— Pilih Marketing —');
  buildSearchableSelect(DATA.koordinator[area]);

  // OLT otomatis
  const oltVal = DATA.oltDefault[area] || '';
  const oltInput = document.getElementById('olt');
  if (oltInput) {
    oltInput.value = oltVal;
    oltInput.readOnly = true;
  }

  // ID suffix
  const suffix = DATA.idSuffix[area];
  document.getElementById('id-suffix').textContent = suffix;
  document.getElementById('id-pelanggan-input').placeholder = 'Angka saja, contoh: 816809021';
}

// ─── SITE SELECTION SCREEN ───────────────────────────────────
function initSiteScreen() {
  const cards = document.querySelectorAll('.site-card');
  const btnMasuk = document.getElementById('btn-masuk');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedArea = card.dataset.area;
      btnMasuk.classList.add('ready');
    });
  });

  btnMasuk.addEventListener('click', () => {
    if (!selectedArea) return;
    enterFormScreen(selectedArea);
  });
}

function enterFormScreen(area) {
  document.getElementById('site-screen').classList.add('hidden');
  const formScreen = document.getElementById('form-screen');
  formScreen.classList.add('active');

  // Update header
  document.getElementById('header-site-name').textContent = 'Pemasangan - ' + area;
  document.getElementById('header-site-badge').textContent = DATA.areaDesc[area];

  // Reset & populate
  refreshDropdowns(area);
  populateSelect('status-tempat', DATA.statusTempat, '— Pilih Status —');

  // Set tanggal
  document.getElementById('tanggal').value = todayISO();

  // Back button
  document.getElementById('btn-back').addEventListener('click', () => {
    formScreen.classList.remove('active');
    document.getElementById('site-screen').classList.remove('hidden');
    document.getElementById('output-section').classList.remove('visible');
    document.getElementById('laporan-form').reset();
    koordinatorValue = '';
  });
}

// ─── NIK VALIDATION ──────────────────────────────────────────
function validateNIK(input) {
  const val = input.value.replace(/\D/g, '');
  input.value = val; // only digits
  const errEl = document.getElementById('nik-error');
  if (val.length > 0 && val.length < 16) {
    input.classList.add('nik-invalid');
    errEl.classList.add('show');
    errEl.textContent = `⚠️ NIK harus 16 digit (saat ini ${val.length} digit)`;
  } else {
    input.classList.remove('nik-invalid');
    errEl.classList.remove('show');
  }
}

// ─── ID PELANGGAN WATCHER ─────────────────────────────────────
function watchIdPelanggan(input) {
  const hint = document.getElementById('id-hint');
  if (input.value.trim().includes('@')) {
    hint.className = 'input-hint warning';
    hint.innerHTML = '⚠️ Cukup isi angkanya saja. Suffix domain otomatis ditambahkan.';
  } else {
    hint.className = 'input-hint';
    hint.innerHTML = 'Isi angka saja, contoh: <code>816809021</code>';
  }
}

// ─── GENERATE LAPORAN ─────────────────────────────────────────
function generateLaporan() {
  if (!selectedArea) return;

  const area       = selectedArea;
  const tanggal    = document.getElementById('tanggal').value;
  const idRaw      = document.getElementById('id-pelanggan-input').value;
  const nik        = document.getElementById('nik').value.replace(/\D/g,'');
  const nama       = document.getElementById('nama').value.trim();

  const jalanVal    = document.getElementById('alamat-jalan').value.trim();
  const rtRwVal     = document.getElementById('alamat-rtrw').value.trim();
  const desaVal     = document.getElementById('alamat-desa').value.trim();
  const kecamatanVal= document.getElementById('alamat-kecamatan').value.trim();
  const patokan     = document.getElementById('patokan') ? document.getElementById('patokan').value.trim() : '';

  const statusTempat= document.getElementById('status-tempat').value;
  const wa          = document.getElementById('wa').value.trim();
  const email       = document.getElementById('email').value.trim();
  const bandwidth   = document.getElementById('bandwidth').value;
  const marketing   = document.getElementById('marketing').value;
  const shareLok    = document.getElementById('share-lok').value;
  const fatOdc      = document.getElementById('fat-odc').value.trim();
  const shareOdp    = document.getElementById('share-odp').value;
  const idOdp       = document.getElementById('id-odp').value.trim();
  const sn          = document.getElementById('sn').value.trim();
  const olt         = document.getElementById('olt').value.trim();
  const redaman     = document.getElementById('redaman').value.trim();
  const panjangKabel= document.getElementById('panjang-kabel').value.trim();
  const klamKabel   = document.getElementById('klam-kabel') ? document.getElementById('klam-kabel').value.trim() : '';
  const pathcore    = document.getElementById('pathcore') ? document.getElementById('pathcore').value.trim() : '';
  const sisaPort    = document.getElementById('sisa-port').value.trim();
  const wifiSeb     = document.getElementById('wifi-seb').value.trim();
  const paketSeb    = document.getElementById('paket-sebelumnya').value.trim();
  const teknisi     = document.getElementById('teknisi').value.trim();

  // ── Validasi NIK ──
  if (nik && nik.length !== 16) {
    showToast('⚠️ NIK harus 16 digit!', 'warning');
    document.getElementById('nik').focus();
    document.getElementById('nik').classList.add('nik-invalid');
    document.getElementById('nik-error').classList.add('show');
    document.getElementById('nik-error').textContent = `⚠️ NIK harus 16 digit (saat ini ${nik.length} digit)`;
    return;
  }

  const suffix      = DATA.idSuffix[area];
  const idPelanggan = normalizeIdPelanggan(idRaw, suffix);
  const alamat      = buildAlamat(jalanVal, rtRwVal, desaVal, kecamatanVal);
  const waFormatted = normalizeWA(wa);
  const lokURL      = extractURL(shareLok);
  const odpURL      = extractURL(shareOdp);

  const headerArea  = up(area);

  const lines = [
    `PEMASANGAN BARU`,
    ``,
    `TANGGAL PEMASANGAN: ${formatDate(tanggal).toUpperCase()}`,
    `ID PELANGGAN: ${idPelanggan}`,
    `NAMA: ${up(nama) || '-'}`,
    `NIK  :   ${nik || '-'}`,
    `ALAMAT: ${alamat}`,
    `STATUS TEMPAT TINGGAL: ${up(statusTempat)}`,
    `PATOKAN: ${up(patokan) || '-'}`,
    `WA: ${waFormatted || '-'}`,
    `EMAIL: ${email ? email.toUpperCase() : '-'}`,
    `PAKET: ${up(bandwidth) || '-'}`,
    `MARKETING: ${up(marketing) || '-'}`,
    `KOORDINATOR: ${up(koordinatorValue) || '-'}`,
    `SHARE LOK  CLIENT: ${lokURL || '-'}`,
    `ID FAT/ODC: ${up(fatOdc) || '-'}`,
    `TIKOR ODP: ${odpURL || '-'}`,
    `ID ODP: ${up(idOdp) || '-'}`,
    `SN PON: ${up(sn) || '-'}`,
    `OLT: ${up(olt) || '-'}`,
    `REDAMAN: ${up(redaman) || '-'}`,
    `PANJANG KABEL: ${up(panjangKabel) || '-'}`,
    `KLAM KABEL: ${up(klamKabel) || '-'}`,
    `PATHCORE: ${up(pathcore) || '-'}`,
    `SISA PORT ODP: ${up(sisaPort) || 'PORT'}`,
    `WIFI SEBELUMNYA: ${up(wifiSeb) || '-'}`,
    `PAKET SEBELUMNYA: ${up(paketSeb) || '-'}`,
    `TEKNISI: ${up(teknisi) || '-'}`
  ];

  const outputText = lines.join('\n');
  document.getElementById('output-text').textContent = outputText;
  document.getElementById('output-section').classList.add('visible');

  setTimeout(() => {
    document.getElementById('output-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);

  showToast('✅ Laporan berhasil dibuat!');
}

// ─── COPY ────────────────────────────────────────────────────
async function copyLaporan() {
  const text = document.getElementById('output-text').textContent;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
  const btn = document.getElementById('btn-copy');
  btn.innerHTML = '✅ Tersalin!';
  setTimeout(() => { btn.innerHTML = '📋 Copy'; }, 2500);
  showToast('📋 Laporan tersalin ke clipboard!');
}

// ─── RESET ───────────────────────────────────────────────────
function resetForm() {
  if (!confirm('Reset semua isian? Data yang sudah diisi akan hilang.')) return;
  document.getElementById('laporan-form').reset();
  document.getElementById('tanggal').value = todayISO();
  document.getElementById('output-section').classList.remove('visible');
  koordinatorValue = '';
  const txt = document.querySelector('#koordinator-trigger .trigger-text');
  if (txt) { txt.textContent = '— Pilih Koordinator —'; txt.classList.remove('selected-val'); }
  // Re-set OLT
  if (selectedArea) {
    document.getElementById('olt').value = DATA.oltDefault[selectedArea] || '';
  }
  // Clear NIK error
  document.getElementById('nik').classList.remove('nik-invalid');
  document.getElementById('nik-error').classList.remove('show');
  showToast('🔄 Form berhasil direset');
}

// ─── TOAST ───────────────────────────────────────────────────
function showToast(msg, type) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.background = type === 'warning' ? '#f59e0b' : '#1e293b';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ─── THEME ───────────────────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  updateThemeButtons(isDark ? 'light' : 'dark');
}

function updateThemeButtons(theme) {
  const isDark = theme === 'dark';
  document.querySelectorAll('.theme-toggle, .header-theme-btn').forEach(btn => {
    btn.innerHTML = isDark
      ? '<span class="icon">☀️</span> Terang'
      : '<span class="icon">🌙</span> Gelap';
  });
}

// ─── INIT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButtons(savedTheme);

  // Theme buttons
  document.querySelectorAll('.theme-toggle, .header-theme-btn').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // Site screen
  initSiteScreen();

  // NIK
  document.getElementById('nik').addEventListener('input', (e) => validateNIK(e.target));

  // ID Pelanggan
  document.getElementById('id-pelanggan-input').addEventListener('input', (e) => watchIdPelanggan(e.target));

  // Status Tempat
  populateSelect('status-tempat', DATA.statusTempat, '— Pilih Status —');

  // Buttons
  document.getElementById('btn-generate').addEventListener('click', generateLaporan);
  document.getElementById('btn-reset').addEventListener('click', resetForm);
  document.getElementById('btn-copy').addEventListener('click', copyLaporan);

  // PWA & Shortcuts
  initPWA();
});

// ─── PWA & SERVICE WORKER LOGIC ──────────────────────────────
let deferredPrompt;

function initPWA() {
  // 1. Handle URL shortcuts (e.g. ?site=Banyumas)
  const urlParams = new URLSearchParams(window.location.search);
  const shortcutSite = urlParams.get('site');
  if (shortcutSite && DATA.areas.includes(shortcutSite)) {
    selectedArea = shortcutSite;
    document.querySelectorAll('.site-card').forEach(c => {
      if(c.dataset.area === shortcutSite) c.classList.add('selected');
    });
    enterFormScreen(shortcutSite);
  }

  // 2. Register Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => {
          console.log('[SW] Registered', reg.scope);
          // Check for updates
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                showUpdateBanner(newWorker);
              }
            });
          });
        })
        .catch(err => console.error('[SW] Registration failed:', err));
    });

    // Handle new SW taking control
    let refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
  }

  // 3. Handle Install Prompt
  const pwaBanner = document.getElementById('pwa-banner');
  const btnInstall = document.getElementById('pwa-install');
  const btnDismiss = document.getElementById('pwa-dismiss');

  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent default mini-infobar
    e.preventDefault();
    deferredPrompt = e;
    
    // Show custom banner after a short delay
    setTimeout(() => {
      // Don't show if they previously dismissed
      if (localStorage.getItem('pwa-dismissed')) return;
      pwaBanner.classList.add('show');
    }, 2000);
  });

  btnInstall.addEventListener('click', async () => {
    pwaBanner.classList.remove('show');
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`[PWA] Install prompt outcome: ${outcome}`);
    deferredPrompt = null;
  });

  btnDismiss.addEventListener('click', () => {
    pwaBanner.classList.remove('show');
    // Save preference to not show again for a while
    localStorage.setItem('pwa-dismissed', 'true');
  });

  window.addEventListener('appinstalled', () => {
    console.log('[PWA] Installed successfully!');
    pwaBanner.classList.remove('show');
    deferredPrompt = null;
  });

  // 4. iOS Install Hint
  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };
  const isStandalone = () => {
    return ('standalone' in window.navigator) && window.navigator.standalone;
  };

  if (isIos() && !isStandalone()) {
    // Show iOS hint if not installed and not dismissed
    if (!localStorage.getItem('ios-hint-dismissed')) {
      const iosHint = document.getElementById('ios-hint');
      const iosClose = document.getElementById('ios-hint-close');
      
      setTimeout(() => {
        iosHint.classList.add('show');
      }, 3000);

      iosClose.addEventListener('click', () => {
        iosHint.classList.remove('show');
        localStorage.setItem('ios-hint-dismissed', 'true');
      });
    }
  }
}

function showUpdateBanner(worker) {
  const banner = document.getElementById('pwa-update-banner');
  const btnUpdate = document.getElementById('pwa-update-btn');
  const btnDismiss = document.getElementById('pwa-update-dismiss');

  banner.classList.add('show');

  btnUpdate.addEventListener('click', () => {
    banner.classList.remove('show');
    worker.postMessage({ type: 'SKIP_WAITING' });
  });

  btnDismiss.addEventListener('click', () => {
    banner.classList.remove('show');
  });
}
