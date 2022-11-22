export interface MyIpRequestResponse {
	ip: string
	country: string
	asn: Asn
	geo: Geo
}

interface Asn {
	asnum: number
	org_name: string
}

interface Geo {
	city: string
	region: string
	region_name: string
	postal_code: string
	latitude: number
	longitude: number
	tz: string
	lum_city: string
	lum_region: string
}
