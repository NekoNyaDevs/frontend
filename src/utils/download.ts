export default async function download(downloadUrl: string) {
    const blob = await fetch(downloadUrl).then(r => r.blob()).catch(() => null);
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const fileName = downloadUrl.split('/').pop();
    link.setAttribute('download', fileName);
    document.body.appendChild(link);

    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
}