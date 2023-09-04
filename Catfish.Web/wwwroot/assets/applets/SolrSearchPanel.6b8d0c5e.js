import { defineComponent as s, openBlock as l, createElementBlock as i, Fragment as m, createVNode as p, unref as e, createElementVNode as c } from "vue";
import { b as y, l as d, s as u, m as t, S as h } from "./library-exports.b377359a.js";
import "pinia";
const S = /* @__PURE__ */ c("h5", null, "Solr Search ", -1), v = /* @__PURE__ */ s({
  __name: "SolrSearchPanel",
  setup(f) {
    y().params.id;
    const r = d();
    r.searchFieldDefinitions = u;
    const n = [], o = "entry_type_s", a = [
      { name: "raw-movie", label: "Movies", entryType: t.Movie },
      { name: "raw-theater", label: "Theaters", entryType: t.Theater },
      { name: "raw-showtime", label: "Showtimes", entryType: t.Showtime }
    ];
    return (T, w) => (l(), i(m, null, [
      S,
      p(e(h), {
        "result-field-names": e(n),
        "entry-type-field-name": o,
        "entry-type-field-options": e(a)
      }, null, 8, ["result-field-names", "entry-type-field-options"])
    ], 64));
  }
});
export {
  v as default
};
