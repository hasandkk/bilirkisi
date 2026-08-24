/**
 * Hero gorsel kompozisyonu.
 * Farkli uzmanlik alanlarini temsil eden teknik ciziim panelleri:
 * yapi, fabrika, arac, muhendislik detayi, veri ekrani ve rapor ozeti.
 * Adalet terazisi / mahkeme tokmagi bilincli olarak kullanilmamistir.
 */
export function HeroVisual() {
  return (
    <div className="relative select-none" aria-hidden>
      {/* Kose ayraclari */}
      <div className="pointer-events-none absolute -top-3 -left-3 size-10 border-t border-l border-gold-500/70" />
      <div className="pointer-events-none absolute -right-3 -bottom-3 size-10 border-r border-b border-gold-500/70" />

      <div className="relative overflow-hidden border border-white/12 bg-white/[0.035] backdrop-blur-[2px]">
        {/* Panel ust seridi */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <span className="font-mono text-[0.625rem] tracking-[0.18em] text-gold-400 uppercase">
            Teknik İnceleme Paneli
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-gold-500/80" />
            <span className="size-1.5 rounded-full bg-white/25" />
            <span className="size-1.5 rounded-full bg-white/25" />
          </span>
        </div>

        <svg
          viewBox="0 0 560 470"
          className="block h-auto w-full"
          role="presentation"
          fill="none"
        >
          <defs>
            <linearGradient id="tr-panel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.015" />
            </linearGradient>
            <linearGradient id="tr-gold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C7A35A" stopOpacity="0" />
              <stop offset="45%" stopColor="#C7A35A" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C7A35A" stopOpacity="0" />
            </linearGradient>
            <pattern id="tr-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke="#C7A35A" strokeOpacity="0.35" strokeWidth="1" />
            </pattern>
          </defs>

          <g stroke="#B3CBE0" strokeOpacity="0.75" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
            {/* --- Panel 1: Yapi kesiti --- */}
            <g transform="translate(28 24)">
              <rect x="0" y="0" width="228" height="196" fill="url(#tr-panel)" stroke="#ffffff" strokeOpacity="0.12" />
              <text x="12" y="20" fill="#C7A35A" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="2.2" stroke="none">
                YAPI / İNŞAAT
              </text>
              {/* bina cephesi */}
              <path d="M28 168V70l58-26 58 26v98" />
              <path d="M16 168h176" stroke="#C7A35A" strokeOpacity="0.65" />
              <path d="M44 88h24v20H44zM104 88h24v20h-24zM44 120h24v20H44zM104 120h24v20h-24z" />
              <path d="M74 168v-24h24v24" fill="url(#tr-hatch)" />
              {/* olculendirme */}
              <path d="M156 70v98M152 70h8M152 168h8" stroke="#C7A35A" strokeOpacity="0.55" />
              <path d="M166 60h44M166 78h30M166 96h38M166 114h26" strokeOpacity="0.35" />
              <circle cx="86" cy="44" r="3" fill="#C7A35A" stroke="none" />
            </g>

            {/* --- Panel 2: Fabrika / endustriyel --- */}
            <g transform="translate(276 24)">
              <rect x="0" y="0" width="256" height="196" fill="url(#tr-panel)" stroke="#ffffff" strokeOpacity="0.12" />
              <text x="12" y="20" fill="#C7A35A" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="2.2" stroke="none">
                FABRİKA / ENDÜSTRİYEL
              </text>
              {/* fabrika silueti */}
              <path d="M18 164v-52l34 22v-22l34 22v-22l34 22v52" />
              <path d="M10 164h236" stroke="#C7A35A" strokeOpacity="0.65" />
              <path d="M132 164V92h26V64h16v28h26v72" />
              <path d="M140 74V52h8v22" />
              <path d="M34 140h12M68 140h12M102 140h12M146 132h18M182 132h18M146 150h18M182 150h18" strokeOpacity="0.45" />
              {/* baca dumani / isi izi */}
              <path d="M144 48c0-6 8-6 8-12s-8-6-8-12" stroke="#C7A35A" strokeOpacity="0.6" />
              {/* makine dislisi */}
              <circle cx="212" cy="52" r="14" strokeOpacity="0.55" />
              <circle cx="212" cy="52" r="5" strokeOpacity="0.55" />
              <path d="M212 34v-6M212 76v-6M230 52h6M188 52h6M225 39l4-4M195 65l4-4M225 65l4 4M195 39l4 4" strokeOpacity="0.4" />
            </g>

            {/* --- Panel 3: Arac / kaza analizi --- */}
            <g transform="translate(28 240)">
              <rect x="0" y="0" width="256" height="206" fill="url(#tr-panel)" stroke="#ffffff" strokeOpacity="0.12" />
              <text x="12" y="20" fill="#C7A35A" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="2.2" stroke="none">
                ARAÇ / KAZA ANALİZİ
              </text>
              {/* arac profili */}
              <path d="M28 116v-14l16-26a8 8 0 0 1 7-4h74a8 8 0 0 1 6 3l20 27h18a10 10 0 0 1 10 10v4" />
              <path d="M22 116h158" stroke="#C7A35A" strokeOpacity="0.65" />
              <circle cx="62" cy="118" r="12" />
              <circle cx="62" cy="118" r="4" strokeOpacity="0.5" />
              <circle cx="146" cy="118" r="12" />
              <circle cx="146" cy="118" r="4" strokeOpacity="0.5" />
              <path d="M46 76h96" strokeOpacity="0.5" />
              <path d="M92 76v26" strokeOpacity="0.4" />
              {/* temas bolgesi */}
              <path d="M176 84l14-8M178 94h16M176 104l14 8" stroke="#C7A35A" strokeOpacity="0.7" />
              {/* trajektori */}
              <path d="M28 152c46-22 92 4 138-18" strokeDasharray="5 5" stroke="#C7A35A" strokeOpacity="0.6" />
              <circle cx="28" cy="152" r="3" fill="#C7A35A" stroke="none" />
              <circle cx="166" cy="134" r="3" fill="#C7A35A" stroke="none" />
              <path d="M22 176h60M92 176h48M150 176h34" strokeOpacity="0.3" />
            </g>

            {/* --- Panel 4: Veri / rapor ekrani --- */}
            <g transform="translate(304 240)">
              <rect x="0" y="0" width="228" height="206" fill="url(#tr-panel)" stroke="#ffffff" strokeOpacity="0.12" />
              <text x="12" y="20" fill="#C7A35A" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="2.2" stroke="none">
                VERİ / RAPORLAMA
              </text>
              {/* log satirlari */}
              <path d="M14 40h84M14 52h58M14 64h72" strokeOpacity="0.35" />
              {/* grafik */}
              <rect x="14" y="82" width="200" height="70" strokeOpacity="0.2" />
              <path d="M22 140l30-22 26 12 30-34 28 20 30-30 30 16" stroke="#C7A35A" strokeOpacity="0.85" />
              <circle cx="108" cy="96" r="3" fill="#C7A35A" stroke="none" />
              <path d="M14 118h200" strokeOpacity="0.15" strokeDasharray="3 4" />
              {/* rapor satirlari */}
              <path d="M14 168h122M14 180h96M14 192h140" strokeOpacity="0.3" />
              <rect x="152" y="162" width="62" height="34" strokeOpacity="0.25" />
              <path d="M162 179h18M162 172h42M162 186h30" strokeOpacity="0.35" />
            </g>
          </g>

          {/* Baglanti cizgileri — multidisipliner vurgusu */}
          <g stroke="#C7A35A" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="4 5">
            <path d="M256 122h20" />
            <path d="M284 220v20" />
            <path d="M156 220v20" />
            <path d="M284 343h20" />
          </g>
        </svg>

        {/* Tarama cizgisi */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-gold-500/[0.07] to-transparent"
            style={{ animation: "tr-scan 7s cubic-bezier(0.4,0,0.2,1) infinite" }}
          />
        </div>

        {/* Panel alt seridi */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-3.5">
          <span className="font-mono text-[0.625rem] tracking-[0.14em] text-navy-300 uppercase">
            Multidisipliner değerlendirme
          </span>
          <span className="flex items-center gap-2 font-mono text-[0.625rem] tracking-[0.14em] text-navy-300 uppercase">
            <span
              className="size-1.5 rounded-full bg-gold-500"
              style={{ animation: "tr-pulse-dot 2.4s ease-in-out infinite" }}
            />
            Dosya bazlı inceleme
          </span>
        </div>
      </div>
    </div>
  );
}
