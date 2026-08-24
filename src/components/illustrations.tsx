/**
 * Uzmanlik alani illustrasyonlari.
 *
 * Her sahne teknik cizim dilinde kurgulanmistir: olcu cizgileri, tarama
 * dokulari ve isaretleme noktalari. Ana konturlar currentColor kullanir,
 * boylece acik ve koyu zeminde ayni bilesen calisir; vurgular altin tonudur.
 */

const GOLD = "#C7A35A";

type Props = { className?: string };

const svg = {
  viewBox: "0 0 360 240",
  fill: "none",
  "aria-hidden": true as const,
  className: "h-auto w-full",
};

const line = {
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Olcu cizgisi — teknik cizim hissini veren tekrar eden ogeler. */
function Dim({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const vertical = x1 === x2;
  return (
    <g stroke={GOLD} strokeOpacity={0.55} strokeWidth={0.9}>
      <path d={`M${x1} ${y1}L${x2} ${y2}`} />
      {vertical ? (
        <>
          <path d={`M${x1 - 4} ${y1}h8`} />
          <path d={`M${x2 - 4} ${y2}h8`} />
        </>
      ) : (
        <>
          <path d={`M${x1} ${y1 - 4}v8`} />
          <path d={`M${x2} ${y2 - 4}v8`} />
        </>
      )}
    </g>
  );
}

function Defs() {
  return (
    <defs>
      <pattern id="tr-ill-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="7" stroke={GOLD} strokeOpacity="0.3" strokeWidth="1" />
      </pattern>
      <pattern id="tr-ill-grid" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M30 0H0V30" fill="none" stroke="currentColor" strokeOpacity="0.07" strokeWidth="1" />
      </pattern>
    </defs>
  );
}

function Grid() {
  return <rect width="360" height="240" fill="url(#tr-ill-grid)" />;
}

/* ------------------------- 01 Trafik ve otomotiv ------------------------- */

export function VehicleScene({ className }: Props) {
  return (
    <svg {...svg} className={className ?? svg.className}>
      <Defs />
      <Grid />
      <g {...line}>
        {/* yol */}
        <path d="M20 176h320" stroke={GOLD} strokeOpacity="0.6" />
        <path d="M28 186h26M70 186h26M112 186h26M154 186h26M196 186h26M238 186h26M280 186h26" strokeOpacity="0.22" />

        {/* arac govdesi */}
        <path d="M64 172v-22l22-34a12 12 0 0 1 10-5h86a12 12 0 0 1 9 4l27 35h26a14 14 0 0 1 14 14v8" />
        <path d="M96 116h74" strokeOpacity="0.5" />
        <path d="M133 116v29" strokeOpacity="0.4" />
        <path d="M78 145h140" strokeOpacity="0.35" />
        {/* tekerlekler */}
        <circle cx="106" cy="174" r="17" />
        <circle cx="106" cy="174" r="6" strokeOpacity="0.45" />
        <circle cx="216" cy="174" r="17" />
        <circle cx="216" cy="174" r="6" strokeOpacity="0.45" />

        {/* temas / darbe bolgesi */}
        <path d="M256 128l16-11M258 141h20M256 154l16 11" stroke={GOLD} strokeOpacity="0.85" strokeWidth="1.4" />
        <path d="M244 122h18v40h-18z" fill="url(#tr-ill-hatch)" stroke="none" />

        {/* trajektori */}
        <path d="M40 214c60-26 122 8 184-16" strokeDasharray="6 6" stroke={GOLD} strokeOpacity="0.7" />
        <circle cx="40" cy="214" r="3.5" fill={GOLD} stroke="none" />
        <circle cx="224" cy="198" r="3.5" fill={GOLD} stroke="none" />
        <path d="M296 44h44M296 56h30M296 68h38" strokeOpacity="0.25" />
      </g>
      <Dim x1={64} y1={40} x2={272} y2={40} />
      <Dim x1={300} y1={112} x2={300} y2={176} />
    </svg>
  );
}

/* --------------------- 02 Yangin ve endustriyel hasar -------------------- */

export function FireScene({ className }: Props) {
  return (
    <svg {...svg} className={className ?? svg.className}>
      <Defs />
      <Grid />
      <g {...line}>
        <path d="M16 192h328" stroke={GOLD} strokeOpacity="0.6" />

        {/* testere disi cati — uretim holu */}
        <path d="M28 192v-58l30 22v-22l30 22v-22l30 22v58" />
        <path d="M40 176h14M70 176h14M100 176h14" strokeOpacity="0.4" />

        {/* ana bina ve baca */}
        <path d="M148 192v-86h34V64h20v42h34v86" />
        <path d="M160 84V52h9v32" />
        <path d="M162 140h18M192 140h18M162 162h18M192 162h18" strokeOpacity="0.35" />

        {/* alev */}
        <path
          d="M120 158c9-14 5-23-3-31 12 5 22 15 22 28a16 16 0 0 1-32 1c0-7 4-11 8-16 2 7 5 12 5 18Z"
          stroke={GOLD}
          strokeWidth="1.5"
        />
        <path d="M112 176c0-6 5-8 6-13 4 5 9 8 9 13a7.5 7.5 0 0 1-15 0Z" fill="url(#tr-ill-hatch)" stroke="none" />

        {/* isi yayilim yaylari */}
        <path d="M92 128a44 44 0 0 1 12-30" stroke={GOLD} strokeOpacity="0.4" strokeDasharray="4 5" />
        <path d="M78 134a62 62 0 0 1 17-44" stroke={GOLD} strokeOpacity="0.28" strokeDasharray="4 5" />

        {/* hasar bolgesi */}
        <path d="M108 96h56v96h-56z" fill="url(#tr-ill-hatch)" stroke="none" opacity=".55" />

        {/* makine parki */}
        <rect x="240" y="150" width="34" height="26" strokeOpacity="0.55" />
        <rect x="286" y="150" width="34" height="26" strokeOpacity="0.55" />
        <circle cx="257" cy="163" r="6" strokeOpacity="0.45" />
        <circle cx="303" cy="163" r="6" strokeOpacity="0.45" />

        <path d="M244 44h60M244 56h40M244 68h52" strokeOpacity="0.25" />
      </g>
      <Dim x1={28} y1={212} x2={236} y2={212} />
    </svg>
  );
}

/* ---------------------------- 03 Insaat ve yapi -------------------------- */

export function BuildingScene({ className }: Props) {
  return (
    <svg {...svg} className={className ?? svg.className}>
      <Defs />
      <Grid />
      <g {...line}>
        <path d="M24 196h312" stroke={GOLD} strokeOpacity="0.6" />
        <path d="M40 206h280" strokeOpacity="0.2" strokeDasharray="5 6" />

        {/* bina cephesi */}
        <path d="M78 196V72l72-30 72 30v124" />
        <path d="M78 106h144M78 136h144M78 166h144" strokeOpacity="0.35" />
        <path d="M104 82h24v18h-24zM172 82h24v18h-24zM104 112h24v18h-24zM172 112h24v18h-24zM104 142h24v18h-24zM172 142h24v18h-24z" strokeOpacity="0.55" />
        <path d="M136 196v-26h28v26" fill="url(#tr-ill-hatch)" />

        {/* catlak deseni */}
        <path
          d="M150 72l8 22-11 16 13 20-8 18 10 22-7 26"
          stroke={GOLD}
          strokeWidth="1.6"
          strokeOpacity="0.95"
        />
        <path d="M158 94l14 8M147 110l-13 10M160 130l16 6" stroke={GOLD} strokeOpacity="0.55" />

        {/* olcu ve detay */}
        <path d="M248 84h58M248 100h40M248 116h50M248 132h34" strokeOpacity="0.25" />
        <circle cx="150" cy="42" r="3.5" fill={GOLD} stroke="none" />
      </g>
      <Dim x1={78} y1={216} x2={222} y2={216} />
      <Dim x1={252} y1={166} x2={252} y2={196} />
    </svg>
  );
}

/* ----------------------------- 04 Tasinmaz ------------------------------- */

export function EstateScene({ className }: Props) {
  return (
    <svg {...svg} className={className ?? svg.className}>
      <Defs />
      <Grid />
      <g {...line}>
        {/* parsel plani */}
        <path d="M40 60h168l40 42-30 96H40z" strokeOpacity="0.85" />
        <path d="M52 72h144l30 32-24 82H52z" strokeOpacity="0.18" strokeDasharray="4 5" />

        {/* yapi oturumu */}
        <rect x="76" y="96" width="84" height="62" fill="url(#tr-ill-hatch)" strokeOpacity="0.7" />
        <path d="M76 122h84M118 96v62" strokeOpacity="0.35" />

        {/* sinir isaretleri */}
        <circle cx="40" cy="60" r="3.5" fill={GOLD} stroke="none" />
        <circle cx="208" cy="60" r="3.5" fill={GOLD} stroke="none" />
        <circle cx="218" cy="198" r="3.5" fill={GOLD} stroke="none" />
        <circle cx="40" cy="198" r="3.5" fill={GOLD} stroke="none" />

        {/* deger analizi — emsal cubuklari */}
        <path d="M264 198V78" strokeOpacity="0.35" />
        <path d="M264 198h72" strokeOpacity="0.35" />
        <rect x="274" y="150" width="14" height="48" strokeOpacity="0.6" />
        <rect x="296" y="122" width="14" height="76" stroke={GOLD} strokeOpacity="0.9" />
        <rect x="318" y="164" width="14" height="34" strokeOpacity="0.6" />
        <path d="M264 118h72" stroke={GOLD} strokeOpacity="0.4" strokeDasharray="4 5" />
      </g>
      <Dim x1={40} y1={44} x2={208} y2={44} />
      <Dim x1={24} y1={60} x2={24} y2={198} />
    </svg>
  );
}

/* ----------------------------- 05 Is kazasi ------------------------------ */

export function SafetyScene({ className }: Props) {
  return (
    <svg {...svg} className={className ?? svg.className}>
      <Defs />
      <Grid />
      <g {...line}>
        <path d="M20 190h320" stroke={GOLD} strokeOpacity="0.6" />

        {/* makine govdesi */}
        <rect x="56" y="96" width="128" height="94" strokeOpacity="0.85" />
        <path d="M56 124h128" strokeOpacity="0.35" />
        <rect x="74" y="140" width="42" height="34" strokeOpacity="0.5" />
        <path d="M84 152h22M84 162h14" strokeOpacity="0.4" />

        {/* donen aksam */}
        <circle cx="152" cy="70" r="26" strokeOpacity="0.7" />
        <circle cx="152" cy="70" r="9" strokeOpacity="0.5" />
        <path d="M152 34v-10M152 116v-10M188 70h10M106 70h10M178 44l7-7M119 96l7-7M178 96l7 7M119 44l7-7" strokeOpacity="0.4" />
        <path d="M152 70l18-18" stroke={GOLD} strokeWidth="1.4" />

        {/* koruyucu / emniyet bolgesi */}
        <path d="M118 44h68v52h-68z" strokeDasharray="5 5" stroke={GOLD} strokeOpacity="0.65" />

        {/* uyari ucgeni */}
        <path d="M242 150l22-38 22 38z" stroke={GOLD} strokeWidth="1.5" />
        <path d="M264 124v10M264 141v2" stroke={GOLD} strokeWidth="1.6" />

        {/* kontrol listesi */}
        <path d="M232 62h72M232 76h50M232 90h64" strokeOpacity="0.25" />
        <path d="M300 168h34M300 178h22" strokeOpacity="0.25" />
      </g>
      <Dim x1={56} y1={210} x2={184} y2={210} />
    </svg>
  );
}

/* ------------------------------ 06 Bilisim ------------------------------- */

export function DigitalScene({ className }: Props) {
  return (
    <svg {...svg} className={className ?? svg.className}>
      <Defs />
      <Grid />
      <g {...line}>
        {/* sunucu kabini */}
        <rect x="34" y="42" width="96" height="156" strokeOpacity="0.85" />
        {[62, 88, 114, 140, 166].map((y) => (
          <g key={y}>
            <rect x="46" y={y} width="72" height="18" strokeOpacity="0.45" />
            <circle cx="56" cy={y + 9} r="2.4" fill={GOLD} stroke="none" opacity={y === 88 ? 1 : 0.4} />
            <path d={`M68 ${y + 9}h38`} strokeOpacity="0.3" />
          </g>
        ))}

        {/* baglanti */}
        <path d="M130 120h34" stroke={GOLD} strokeOpacity="0.6" strokeDasharray="4 5" />

        {/* ekran — log ve grafik */}
        <rect x="164" y="52" width="164" height="116" strokeOpacity="0.85" />
        <path d="M164 74h164" strokeOpacity="0.35" />
        <circle cx="176" cy="63" r="2.6" fill={GOLD} stroke="none" />
        <path d="M186 63h2M194 63h2" strokeOpacity="0.4" />

        <path d="M178 90h56M178 102h38M178 114h48" strokeOpacity="0.28" />
        <path
          d="M178 152l22-18 18 10 22-26 20 16 22-24 22 12"
          stroke={GOLD}
          strokeWidth="1.5"
        />
        <circle cx="240" cy="118" r="3.4" fill={GOLD} stroke="none" />
        <path d="M178 134h136" strokeOpacity="0.14" strokeDasharray="3 4" />

        {/* ayak ve taban */}
        <path d="M246 168v14M212 196h68" strokeOpacity="0.5" />
        <path d="M164 210h164" stroke={GOLD} strokeOpacity="0.35" />
      </g>
    </svg>
  );
}

/* --------------------------- 07 Imza ve belge ---------------------------- */

export function DocumentScene({ className }: Props) {
  return (
    <svg {...svg} className={className ?? svg.className}>
      <Defs />
      <Grid />
      <g {...line}>
        {/* arka belgeler */}
        <path d="M92 40h84l26 26v128H92z" strokeOpacity="0.28" />
        <path d="M74 54h84l26 26v128H74z" strokeOpacity="0.45" />

        {/* on belge */}
        <path d="M56 68h84l26 26v122H56z" strokeOpacity="0.9" />
        <path d="M140 68v26h26" strokeOpacity="0.7" />
        <path d="M72 116h78M72 130h60M72 144h72" strokeOpacity="0.3" />

        {/* imza */}
        <path
          d="M74 182c14-24 22-22 28 2s16 20 26-8 16-14 24 6"
          stroke={GOLD}
          strokeWidth="1.6"
        />
        <path d="M72 196h80" strokeOpacity="0.35" />

        {/* buyutec */}
        <circle cx="238" cy="128" r="46" strokeOpacity="0.85" />
        <circle cx="238" cy="128" r="46" fill={GOLD} fillOpacity="0.04" stroke="none" />
        <path d="M272 162l30 30" strokeWidth="2.4" strokeOpacity="0.85" />
        <path
          d="M210 136c10-18 16-16 21 2s12 14 19-6"
          stroke={GOLD}
          strokeWidth="1.8"
        />
        <path d="M206 150h64" strokeOpacity="0.25" />

        {/* karsilastirma isaretleri */}
        <path d="M212 104h6M226 104h6M240 104h6M254 104h6" stroke={GOLD} strokeOpacity="0.5" />
      </g>
    </svg>
  );
}

/* ---------------------- Multidisipliner yakinsama semasi ------------------ */

export function ConvergenceScene({ className }: Props) {
  const nodes = [
    { x: 60, y: 48, label: "YANGIN" },
    { x: 300, y: 48, label: "ELEKTRİK" },
    { x: 34, y: 148, label: "MAKİNE" },
    { x: 326, y: 148, label: "İNŞAAT" },
    { x: 180, y: 214, label: "MALİYET" },
  ];
  return (
    <svg viewBox="0 0 360 250" fill="none" aria-hidden className={className ?? "h-auto w-full"}>
      <Defs />
      <g stroke="currentColor" strokeWidth="1.1">
        {nodes.map((n) => (
          <path
            key={n.label}
            d={`M${n.x} ${n.y}L180 128`}
            stroke={GOLD}
            strokeOpacity="0.35"
            strokeDasharray="5 6"
          />
        ))}
      </g>

      {/* merkez — dosya */}
      <circle cx="180" cy="128" r="46" fill={GOLD} fillOpacity="0.07" stroke={GOLD} strokeWidth="1.4" />
      <circle cx="180" cy="128" r="60" stroke={GOLD} strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 6" />
      <g stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
        <path d="M166 108h20l10 10v30h-30z" />
        <path d="M186 108v10h10" />
        <path d="M172 130h18M172 138h12" strokeOpacity="0.45" />
      </g>
      <text
        x="180"
        y="166"
        textAnchor="middle"
        fontSize="9"
        letterSpacing="2"
        fill={GOLD}
        fontFamily="ui-monospace, monospace"
      >
        DOSYA
      </text>

      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="5" fill={GOLD} />
          <circle cx={n.x} cy={n.y} r="12" stroke={GOLD} strokeOpacity="0.3" strokeWidth="1" />
          <text
            x={n.x}
            y={n.y - 22}
            textAnchor="middle"
            fontSize="8.5"
            letterSpacing="1.8"
            fill="currentColor"
            fillOpacity="0.75"
            fontFamily="ui-monospace, monospace"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export const areaScenes = {
  vehicle: VehicleScene,
  fire: FireScene,
  building: BuildingScene,
  estate: EstateScene,
  safety: SafetyScene,
  digital: DigitalScene,
  document: DocumentScene,
} as const;

export type SceneKey = keyof typeof areaScenes;
