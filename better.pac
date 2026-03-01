function FindProxyForURL(url, host) {

    // Game-related domains
    if (dnsDomainIs(host, ".activision.com") ||
        dnsDomainIs(host, ".callofduty.com")) {
        return "PROXY 102.130.125.86:8080";
    }

    // Local traffic stays direct
    if (isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {
        return "DIRECT";
    }

    return "DIRECT";
}