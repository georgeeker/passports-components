'use strict';

describe('hmpoSelect', () => {
    let locals;

    beforeEach(() => {
        locals = {
            options: {
                fields: {
                    'my-input': {
                        validate: 'required',
                        items: [ 'a', 'b', 'c' ]
                    }
                }
            },
            values: {
                'my-input': 'b'
            }
        };
    });

    it('renders with name and id', () => {
        const $ = render('hmpoSelect', { id: 'my-input' }, locals);

        const $component = $('select');
        expect($component.attr('id')).to.equal('my-input');
    });

    it('renders with label and hint', () => {
        const $ = render('hmpoSelect', { id: 'my-input' }, locals);

        const $label = $('.govuk-label');
        expect($label.text().trim()).to.equal('fields.my-input.label');
        expect($label.attr('id')).to.equal('my-input-label');
        const $hint = $('.govuk-hint');
        expect($hint.text().trim()).to.equal('fields.my-input.hint');
    });

    it('renders items with names and labels', () => {
        const $ = render('hmpoSelect', { id: 'my-input' }, locals);

        const $item1 = $('option').eq(0);
        expect($item1.attr('value')).to.equal('a');
        expect($item1.attr('selected')).to.be.undefined;
        expect($item1.text().trim()).to.equal('fields.my-input.items.a.label');

        const $item2 = $('option').eq(1);
        expect($item2.attr('value')).to.equal('b');
        expect($item2.attr('selected')).to.equal('selected');
        expect($item2.text().trim()).to.equal('fields.my-input.items.b.label');
    });

});