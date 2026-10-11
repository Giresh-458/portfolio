import { useId } from "react";
import { cn } from "@/lib/utils";

export type SlayerVariant =
  | "tanjiro"
  | "nezuko"
  | "zenitsu"
  | "inosuke"
  | "giyu"
  | "rengoku"
  | "shinobu";

type Palette = {
  hair: string;
  uniform: string;
  haori: string;
  shadow: string;
  accent: string;
  secondary: string;
  blade: string;
};

const palettes: Record<SlayerVariant, Palette> = {
  tanjiro: { hair: "#211F2B", uniform: "#151A25", haori: "#2C684B", shadow: "#132A25", accent: "#39D8F3", secondary: "#D93645", blade: "#E6FCFF" },
  nezuko: { hair: "#251927", uniform: "#6D294B", haori: "#B84D7D", shadow: "#3A172D", accent: "#FF82C6", secondary: "#D93662", blade: "#FFE7F4" },
  zenitsu: { hair: "#F2B92D", uniform: "#211F2C", haori: "#D5A72B", shadow: "#6D431E", accent: "#FFE35A", secondary: "#FF913B", blade: "#FFF8C7" },
  inosuke: { hair: "#78C5D6", uniform: "#25263A", haori: "#486F87", shadow: "#1A283A", accent: "#9FE8F5", secondary: "#6386F5", blade: "#E4FCFF" },
  giyu: { hair: "#1C2735", uniform: "#141D29", haori: "#33536B", shadow: "#152735", accent: "#53D8F5", secondary: "#9E76DA", blade: "#E3FAFF" },
  rengoku: { hair: "#F1B63E", uniform: "#221B25", haori: "#A62F35", shadow: "#3B1725", accent: "#FF8554", secondary: "#FFD768", blade: "#FFF0C0" },
  shinobu: { hair: "#362542", uniform: "#231E32", haori: "#A6BEDD", shadow: "#28243C", accent: "#D0ABFF", secondary: "#FA94CF", blade: "#FFF2FF" }
};

/** Original, lightweight anime-style Corps swordsman art drawn locally in SVG. */
export function SlayerIllustration({
  variant = "tanjiro",
  className,
  label
}: {
  variant?: SlayerVariant;
  className?: string;
  label?: string;
}) {
  const uid = useId().replaceAll(":", "");
  const p = palettes[variant];
  const checker = variant === "tanjiro";
  const triangles = variant === "zenitsu";
  const wisteria = variant === "shinobu" || variant === "nezuko";
  const boar = variant === "inosuke";
  const flame = variant === "rengoku";

  return (
    <svg
      viewBox="0 0 420 540"
      className={cn("slayer-figure-art", className)}
      role={label ? "img" : "presentation"}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={uid + "-aura"} cx="0" cy="0" r="1" gradientTransform="translate(266 182) rotate(90) scale(228 174)" gradientUnits="userSpaceOnUse">
          <stop stopColor={p.accent} stopOpacity=".32" />
          <stop offset="1" stopColor={p.accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={uid + "-cloth"} x1="104" y1="280" x2="323" y2="520" gradientUnits="userSpaceOnUse">
          <stop stopColor={p.haori} />
          <stop offset="1" stopColor={p.shadow} />
        </linearGradient>
        <linearGradient id={uid + "-face"} x1="190" y1="151" x2="254" y2="254" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE4CD" />
          <stop offset="1" stopColor="#C98778" />
        </linearGradient>
        <linearGradient id={uid + "-blade"} x1="154" y1="443" x2="321" y2="182" gradientUnits="userSpaceOnUse">
          <stop stopColor={p.blade} stopOpacity=".72" />
          <stop offset=".52" stopColor="#FFFFFF" />
          <stop offset="1" stopColor={p.accent} />
        </linearGradient>
        <pattern id={uid + "-haori"} width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill={p.haori} />
          {checker ? (
            <g>
              <rect width="20" height="20" fill="#132D27" />
              <rect x="20" y="20" width="20" height="20" fill="#132D27" />
              <path d="M20 0H40V20H20ZM0 20H20V40H0Z" fill="#497A5B" />
            </g>
          ) : triangles ? (
            <g fill="#F8DE72" stroke="#392C2B" strokeWidth="1.2">
              <path d="M0 0H20L10 20Z" />
              <path d="M20 20H40L30 40Z" />
              <path d="M20 0H40L30 20Z" fill="#242331" />
              <path d="M0 20H20L10 40Z" fill="#242331" />
            </g>
          ) : wisteria ? (
            <g fill="none" stroke="#F6D6E8" strokeWidth="2" strokeOpacity=".78">
              <path d="M9 -2C21 10 8 24 15 42" />
              <path d="M14 10L4 14M12 21L23 24M14 31L5 35" />
              <circle cx="28" cy="9" r="2.5" fill="#F6D6E8" />
              <circle cx="28" cy="29" r="2.5" fill="#F6D6E8" />
            </g>
          ) : (
            <g fill="none" stroke={p.accent} strokeOpacity=".42" strokeWidth="1.8">
              <path d="M4 11C11 2 18 19 25 10S35 2 40 9" />
              <path d="M0 31C9 22 18 39 27 30S36 22 40 28" />
            </g>
          )}
        </pattern>
      </defs>

      <ellipse cx="258" cy="220" rx="157" ry="216" fill={"url(#" + uid + "-aura)"} />
      <circle cx="278" cy="108" r="58" fill={p.secondary} fillOpacity=".12" />
      <circle cx="278" cy="108" r="43" stroke={p.secondary} strokeOpacity=".38" strokeWidth="1.5" />
      <circle cx="278" cy="108" r="34" fill={p.secondary} fillOpacity=".08" />

      {flame ? (
        <g stroke={p.accent} strokeLinecap="round">
          <path d="M83 365C39 301 92 269 105 229C116 275 149 283 135 326C163 293 174 272 167 238C218 298 173 354 152 386" strokeWidth="5" strokeOpacity=".75" />
          <path d="M305 337C347 276 318 245 328 210C370 250 373 284 348 319" strokeWidth="3" strokeOpacity=".5" />
        </g>
      ) : (
        <g stroke={p.accent} strokeLinecap="round" strokeLinejoin="round">
          <path d="M57 354C116 313 83 258 140 221C195 185 231 246 275 223C314 202 310 163 346 139" strokeWidth="6" strokeOpacity=".72" />
          <path d="M72 395C121 358 136 319 167 305C206 287 233 327 276 301C316 276 327 248 358 236" strokeWidth="2.5" strokeOpacity=".5" />
          <path d="M89 296C118 260 115 226 142 198" strokeWidth="2" strokeOpacity=".34" />
        </g>
      )}

      <path d="M139 275L105 308C82 343 67 411 61 514L346 528C346 451 341 367 301 309L268 273Z" fill={"url(#" + uid + "-cloth)"} stroke={p.accent} strokeOpacity=".4" strokeWidth="2" />
      <path d="M170 263L145 298L170 366L215 398L258 362L278 298L252 263Z" fill={p.uniform} stroke="#F0D4BF" strokeOpacity=".18" strokeWidth="1.5" />
      <path d="M194 257V300L215 325L237 300V257Z" fill="#D7A58E" />
      <path d="M194 278L215 300L237 278L246 292L216 326L185 292Z" fill="#10121B" stroke="#E5D5CA" strokeOpacity=".23" strokeWidth="1" />
      <path d="M142 295L183 317L155 439L111 503L73 493L97 360Z" fill={"url(#" + uid + "-haori)"} stroke={p.accent} strokeOpacity=".32" strokeWidth="1.5" />
      <path d="M273 293L244 317L276 430L316 496L345 489L323 355Z" fill={"url(#" + uid + "-haori)"} stroke={p.accent} strokeOpacity=".32" strokeWidth="1.5" />
      <path d="M181 315L216 339L249 315L267 356L243 422L216 443L188 420L164 356Z" fill={p.uniform} stroke="#F6DCCB" strokeOpacity=".2" strokeWidth="1.5" />
      <path d="M215 340V443" stroke={p.accent} strokeOpacity=".42" strokeWidth="1.5" />
      <path d="M185 353L201 365M246 353L230 365" stroke="#C7BBC0" strokeOpacity=".5" strokeWidth="2" />

      <path d="M173 156C166 117 188 92 222 94C253 95 274 123 264 166L254 222C248 247 232 263 213 259C187 253 174 226 171 199Z" fill={"url(#" + uid + "-face)"} stroke="#6B3D43" strokeOpacity=".5" strokeWidth="1.5" />
      <path d={variant === "nezuko"
        ? "M170 172C145 125 170 79 216 75C265 69 289 119 262 165L251 202L239 125L218 112L190 129L178 185Z"
        : variant === "zenitsu"
          ? "M166 162L158 121L180 130L174 91L201 112L214 73L230 110L253 88L256 128L278 116L261 171L247 144L229 129L206 137L184 159Z"
          : variant === "rengoku"
            ? "M164 163L156 126L177 132L174 99L199 116L216 72L234 108L256 88L258 130L282 109L264 170L245 142L223 128L198 140L183 159Z"
            : variant === "shinobu"
              ? "M166 159L158 124L177 129L175 100L194 115L206 92L224 116L249 91L253 128L275 115L261 173L244 143L222 128L199 138L182 159Z"
              : variant === "inosuke"
                ? "M162 161L157 123L181 132L173 95L199 112L214 81L235 108L257 91L260 130L280 119L263 176L243 147L222 130L200 139L182 161Z"
                : "M164 163L156 126L177 132L174 101L198 116L214 78L231 109L252 91L257 130L279 113L263 171L245 143L222 128L199 139L183 159Z"}
        fill={p.hair} stroke={p.shadow} strokeWidth="3" strokeLinejoin="round" />
      {variant === "nezuko" ? (
        <g fill={p.hair} stroke={p.shadow} strokeWidth="2">
          <path d="M174 153C149 210 161 266 136 319C171 295 190 248 187 200Z" />
          <path d="M250 151C277 211 273 259 304 296C278 288 248 245 243 202Z" />
          <path d="M182 87L156 58L187 69L202 47L224 70L253 55L262 87Z" />
          <path d="M172 101L156 75L187 87L205 67L223 88L246 72L253 103Z" fill="#D85891" stroke="none" />
        </g>
      ) : null}
      {flame ? <path d="M172 116L146 94L163 139L136 127L164 170L181 143L199 125L217 144L237 125L258 146L282 121L260 163L246 144L223 127L199 141L183 153Z" fill="#F7D269" stroke="none" /> : null}

      {boar ? (
        <g>
          <path d="M171 151C177 126 252 122 269 151L255 202C245 225 198 232 184 207Z" fill="#9AA0AA" stroke="#4C5263" strokeWidth="3" />
          <path d="M174 156L143 134L153 181L183 184ZM264 156L294 134L284 181L255 184Z" fill="#7A8292" stroke="#4C5263" strokeWidth="3" />
          <ellipse cx="197" cy="174" rx="10" ry="7" fill="#4DB7F5" stroke="#E7FCFF" strokeWidth="2" />
          <ellipse cx="242" cy="174" rx="10" ry="7" fill="#4DB7F5" stroke="#E7FCFF" strokeWidth="2" />
          <circle cx="197" cy="174" r="3.5" fill="#111725" />
          <circle cx="242" cy="174" r="3.5" fill="#111725" />
          <path d="M204 202Q219 212 235 202" stroke="#E8ECF5" strokeWidth="3" strokeLinecap="round" />
          <path d="M207 217L231 217" stroke="#343849" strokeWidth="3" strokeLinecap="round" />
        </g>
      ) : (
        <g>
          <path d="M183 179Q195 170 205 180" stroke="#2B1B25" strokeWidth="4" strokeLinecap="round" />
          <path d="M227 180Q239 170 250 178" stroke="#2B1B25" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="197" cy="186" rx="5" ry="7" fill={variant === "nezuko" ? "#E65D93" : "#3D8EBC"} />
          <ellipse cx="240" cy="186" rx="5" ry="7" fill={variant === "nezuko" ? "#E65D93" : "#3D8EBC"} />
          <circle cx="198" cy="187" r="2" fill="#161521" />
          <circle cx="241" cy="187" r="2" fill="#161521" />
          <path d="M215 188L210 204L217 207" stroke="#8B4D50" strokeWidth="2" strokeLinecap="round" />
          <path d="M205 219Q217 226 230 218" stroke="#8A3E4D" strokeWidth="2.5" strokeLinecap="round" />
          {variant === "tanjiro" ? <path d="M177 142L190 129L202 142L194 151L182 151Z" fill="#B6343F" stroke="#F2B0A0" strokeWidth="1.2" /> : null}
          {variant === "tanjiro" ? (
            <g>
              <path d="M174 194L160 207L174 214" stroke="#7B2738" strokeWidth="3" />
              <path d="M164 225L182 235" stroke="#7B2738" strokeWidth="2" />
              <path d="M165 239L177 246" stroke="#7B2738" strokeWidth="2" />
            </g>
          ) : null}
          {variant === "nezuko" ? <g><path d="M187 208L247 201L249 215L190 224Z" fill="#7A4A35" stroke="#3A2B2E" strokeWidth="2" /><path d="M190 214L244 207" stroke="#E3B991" strokeWidth="2" /></g> : null}
          {variant === "shinobu" ? <g fill="#F6D6E8"><path d="M166 110L150 91L174 96L186 78L198 99Z"/><path d="M253 104L274 87L265 112L281 119L259 128Z"/></g> : null}
        </g>
      )}

      <path d="M157 287L124 311L101 367L129 389L171 342Z" fill={p.uniform} stroke={p.accent} strokeOpacity=".3" strokeWidth="1.5" />
      <path d="M283 288L308 314L324 365L297 389L267 341Z" fill={p.uniform} stroke={p.accent} strokeOpacity=".3" strokeWidth="1.5" />
      <path d="M122 346L165 363L151 401L113 384Z" fill="#D7A58E" />
      <path d="M286 343L265 363L280 400L311 381Z" fill="#D7A58E" />

      <g transform="rotate(29 206 331)">
        <path d="M202 103L215 103L224 414L211 421Z" fill={"url(#" + uid + "-blade)"} stroke="#EAFBFF" strokeWidth="1.5" />
        <path d="M208 119L215 116L219 403" stroke={p.accent} strokeWidth="2" strokeOpacity=".75" />
        <path d="M194 403L231 397L235 414L197 421Z" fill="#25212B" stroke={p.secondary} strokeWidth="2" />
        <path d="M197 408L231 403M199 415L233 410" stroke="#E9D9C9" strokeOpacity=".65" strokeWidth="2" />
        <path d="M186 419L241 410L246 419L191 430Z" fill={p.secondary} stroke="#F4D5BE" strokeWidth="1.5" />
      </g>

      <path d="M91 472C134 451 150 414 159 388" stroke={p.accent} strokeWidth="5" strokeLinecap="round" strokeOpacity=".7" />
      <path d="M289 440C321 403 324 372 316 342" stroke={p.secondary} strokeWidth="3" strokeLinecap="round" strokeOpacity=".55" />
      <g fill={p.accent}>
        <circle cx="103" cy="272" r="3.5" fillOpacity=".75" />
        <circle cx="327" cy="300" r="2.5" fillOpacity=".65" />
        <circle cx="90" cy="424" r="2" fillOpacity=".8" />
        <circle cx="338" cy="401" r="3" fillOpacity=".6" />
      </g>

      {variant === "tanjiro" ? (
        <g stroke="#F6D7B6" strokeWidth="1.8">
          <path d="M174 183L156 181L152 208L169 211" />
          <path d="M257 185L276 181L280 208L263 211" />
          <circle cx="154" cy="216" r="4" fill="#D93645" />
          <circle cx="278" cy="216" r="4" fill="#D93645" />
          <path d="M153 220L153 245M278 220L278 245" stroke="#D93645" strokeWidth="2" />
        </g>
      ) : null}

      <path d="M65 515C133 493 185 523 239 507S318 494 348 516" stroke="#F1D7C4" strokeOpacity=".28" strokeWidth="1.5" />
    </svg>
  );
}