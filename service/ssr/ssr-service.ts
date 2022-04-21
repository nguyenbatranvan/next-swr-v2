class SsrService {
    async get<T = any>(path: string, isNeedProtocol: boolean = false): Promise<T> {
        let url = path;
        if (isNeedProtocol) {
            const env = process.env.NODE_ENV;
            const protocol = env == 'production' ? 'http://' : 'http://';
            url = protocol + url;
        }
        console.log('url: ',url)
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}

export default new SsrService();