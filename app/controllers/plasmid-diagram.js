App.PlasmidDiagramController = Ember.ObjectController.extend({
	needs: ["dna-inspector"],
	
	featureViewModels: Ember.computed.alias('controllers.dna-inspector.featureViewModels'),
	dnamolecule: Ember.computed.alias('controllers.dna-inspector.model'),

	plasmidDiagramViewModel: function () {
		return App.PlasmidDiagramViewModel.create({
			dnamolecule: this.get('dnamolecule')
		});
	}.property(),
});