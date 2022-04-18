import AppStoreBtn from "@/components/UI/AppStoreBtn";
import PlayMarketBtn from "@/components/UI/PlayMarketBtn";
export default {
	name: 'generation',
		data: () => ({
			generalInfoArr: [
				{id: 1, title: 'Yeni nəsil elektron imza', text: 'SİMA – bulud və üztanıma texnologiyalarına əsaslanan yeni nəsil elektron imzadır. Mobil tətbiq əsaslı SİMA əlavə vasitələrə ehtiyac olmadan, eləcə də heç yerə getmədən daha rahat şəkildə elektron xidmətlər əldə etməyə imkan verəcək.', img: require('@/assets/images/sima1.png')},
				{id: 2, title: 'SİMA-da ilk tərəfdaş', text: 'Artıq “PAŞA Bank”ın əmək haqqı kartı sahibləri mobil tətbiq vasitəsilə banka getmədən kredit üçün müraciət edə biləcəklər. Bunun üçün SİMA tətbiqində qeydiyyatdan keçmək kifayətdir.', img: require('@/assets/images/sima2.png')}
			]
		}),
	methods: {
		clickBtn() {
			console.log('button clicked')
		}
	},
	components: {
	AppStoreBtn,
	PlayMarketBtn
	}
}