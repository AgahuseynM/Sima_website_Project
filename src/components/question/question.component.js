export default {
	name: 'question',
	data: () => ({
		firstQuestionVisibility: true,
		secondQuestionVisibility: false,
		thirdQuestionVisibility: false
	}),
	methods: {
		showFirstQuestion() {
			this.firstQuestionVisibility = !this.firstQuestionVisibility
		},
		showSecondQuestion() {
			this.secondQuestionVisibility = !this.secondQuestionVisibility
		},
		showThirdQuestion() {
			this.thirdQuestionVisibility = !this.thirdQuestionVisibility
		}
	}
}