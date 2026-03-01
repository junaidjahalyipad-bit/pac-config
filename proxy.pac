function FindProxyForURL(url, host) {

    if (dnsDomainIs(host, ".activision.com") ||
        dnsDomainIs(host, ".callofduty.com")) {
        return "PROXY 160.123.255.3:80";
    }

    if (isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {
        return "DIRECT";
    }

    return "DIRECT";
}