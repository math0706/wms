/**
 * Copyright 2020 Akretion (http://www.akretion.com)
 * @author Francois Poizat <francois.poizat@gmail.com>
 * License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
 */

Vue.component("choosing-reception-contact", {
    props: ["stateData"],
    template: `
        <div>
            <searchbar
                :input_placeholder="scan_placeholder"
            />
            <contact-list
                v-on="$listeners"
                :fields="stateData.fields"
                :contacts="stateData.contacts"
                />
        </div>
    `,
    data: () => ({
        scan_placeholder: "Scan contact / receipt / product",
    })
});
