import type { SingBox } from "@lib";

export const LINUX: SingBox = {
  log: { level: "warn" },
  dns: {
    servers: [
      { type: "local", tag: "dns:local" },
      { type: "https", tag: "dns:proxy", server: "8.8.8.8", server_port: 443 },
    ],
    rules: [
      { rule_set: ["geosite:private"], server: "dns:local" },
      { clash_mode: "Direct", server: "dns:local" },
      { clash_mode: "Global", server: "dns:proxy" },
      { rule_set: ["geosite:cn"], server: "dns:local" },
      {
        type: "logical",
        mode: "and",
        rules: [
          { rule_set: ["geoip:cn"] },
          { rule_set: ["geosite:proxy"], invert: true },
        ],
        server: "dns:proxy",
        client_subnet: "101.6.6.6",
      },
    ],
    final: "dns:proxy",
    independent_cache: true,
  },
  inbounds: [
    { type: "mixed", tag: "in:mixed", listen: "127.0.0.1", listen_port: 5353 },
  ],
  outbounds: [
    { type: "direct", tag: "DIRECT" },
    { type: "selector", tag: "PROXY", outbounds: [] },
    { type: "selector", tag: "✅ Select", outbounds: [] },
    {
      type: "urltest",
      tag: "🚀 Auto",
      outbounds: [],
      url: "https://cp.cloudflare.com",
    },
    {
      type: "urltest",
      tag: "🤖 AI",
      outbounds: [],
      url: "https://cp.cloudflare.com",
    },
    {
      type: "urltest",
      tag: "☁️ Download",
      outbounds: [],
      url: "https://cp.cloudflare.com",
    },
    {
      type: "urltest",
      tag: "🍟 Emby",
      outbounds: [],
      url: "https://cp.cloudflare.com",
    },
    {
      type: "urltest",
      tag: "📺 Media",
      outbounds: [],
      url: "https://cp.cloudflare.com",
    },
  ],
  route: {
    rules: [
      { action: "sniff" },
      { port: [53], action: "hijack-dns" },
      { protocol: ["dns"], action: "hijack-dns" },
      { ip_is_private: true, outbound: "DIRECT" },
      { rule_set: ["rule-set:private"], outbound: "DIRECT" },
      { clash_mode: "Direct", outbound: "DIRECT" },
      { clash_mode: "Global", outbound: "PROXY" },
      { rule_set: ["rule-set:cn"], outbound: "DIRECT" },
      { rule_set: ["rule-set:ai"], outbound: "🤖 AI" },
      { rule_set: ["rule-set:download"], outbound: "☁️ Download" },
      { rule_set: ["rule-set:emby"], outbound: "🍟 Emby" },
      { rule_set: ["rule-set:media"], outbound: "📺 Media" },
    ],
    rule_set: [],
    final: "PROXY",
    auto_detect_interface: true,
    default_domain_resolver: {
      server: "dns:local",
    },
  },
  experimental: {
    cache_file: {
      enabled: true,
      store_rdrc: true,
    },
    clash_api: {
      external_controller: "127.0.0.1:9090",
      external_ui_download_url: "https://api.liblaf.me/assets/metacubexd.zip",
      external_ui_download_detour: "DIRECT",
    },
  },
};
