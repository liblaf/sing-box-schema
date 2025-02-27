export enum ClashMode {
  DIRECT = "Direct",
  GLOBAL = "Global",
}

export enum DnsTag {
  LOCAL = "dns:local",
  PROXY = "dns:proxy",
}

export enum GeoipTag {
  CN = "geoip:cn",
}

export enum GeositeTag {
  ADS = "geosite:ads",
  CN = "geosite:cn",
  PRIVATE = "geosite:private",
  PROXY = "geosite:proxy",
}

export enum InboundTag {
  MIXED = "in:mixed",
  TUN = "in:tun",
}

export enum OutboundTag {
  DIRECT = "DIRECT",
  PROXY = "PROXY",
  SELECT = "SELECT",
  AUTO = "AUTO",
  AI = "AI",
  DOWNLOAD = "DOWNLOAD",
  EMBY = "EMBY",
  MEDIA = "MEDIA",
}

export enum RuleSetTag {
  ADS = "rule-set:ads",
  AI = "rule-set:ai",
  CN = "rule-set:cn",
  DOWNLOAD = "rule-set:download",
  EMBY = "rule-set:emby",
  MEDIA = "rule-set:media",
  PRIVATE = "rule-set:private",
  PROXY = "rule-set:proxy",
}
