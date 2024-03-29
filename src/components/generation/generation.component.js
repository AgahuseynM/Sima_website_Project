import DownloadBtn from "@/components/UI/downloadBtn.component";
export default {
    name: 'generation',
    components: {
      DownloadBtn
    },
    data: () => ({
        generalInfoArray: [
            {
                id: 1,
                title: 'Yeni nəsil elektron imza',
                text: 'SİMA – bulud və üztanıma texnologiyalarına əsaslanan yeni nəsil elektron imzadır. Mobil tətbiq əsaslı SİMA əlavə vasitələrə ehtiyac olmadan, eləcə də heç yerə getmədən daha rahat şəkildə elektron xidmətlər əldə etməyə imkan verəcək.',
                img: require('@/assets/images/sima1.png')
            },
            {
                id: 2,
                title: 'SİMA-da ilk tərəfdaş',
                text: 'Artıq “PAŞA Bank”ın əmək haqqı kartı sahibləri mobil tətbiq vasitəsilə banka getmədən kredit üçün müraciət edə biləcəklər. Bunun üçün SİMA tətbiqində qeydiyyatdan keçmək kifayətdir.',
                img: require('@/assets/images/sima2.png')
            }
        ]
    })
}