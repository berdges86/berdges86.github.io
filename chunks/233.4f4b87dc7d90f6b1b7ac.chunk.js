(window.webpackJsonp = window.webpackJsonp || []).push([[233], {
    2600: function(e, t, n) {
        "use strict";
        var a, s = i(n(2797)), l = i(n(133));
        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function r(e, t) {
            e.when("/study_plan/scheduleteacher", {
                template: s["default"],
                controller: "StudyPlanAllScheduleTeacherController",
                controllerAs: "scheduleTeacher",
                screenType: "wide",
                access: ["school_admin", "school_admin_read_only", "deputy", "principal", "right:" + t.ADDITIONAL_EDUCATION]
            })
        }
        angular.module("ezd.study_plan.all_schedule_teacher", [l["default"]]).config(r),
        (a = n(5929)).keys().forEach(a),
        r.$inject = ["$routeProvider", "RIGHTS"]
    },
    2797: function(e, t) {
        e.exports = '<div class="wrapper">\n\t<theme-manager></theme-manager>\n\t<app-header></app-header>\n\t\x3c!-- .header--\x3e\n\n\t<main class="content clearfix" main-content ng-style="$root.styles.page">\n\t\t<div class="b-left__sidebar" ng:class="{true:\'closed-menu\'}[$root.closedMenu]">\n\t\t\t<div class="b-left__menu">\n\t\t\t\t<current-date></current-date>\n\t\t\t\t<left-nav></left-nav>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="b-right__sidebar" ng-style="$root.styles.r_sidebar" cg-busy="$root.loaderPromise">\n\t\t\t\x3c!-- Учебные планы --\x3e\n\n\t\t\t<parallel-curricula-list ng-if="$root.refName == \'parallel_curricula\'"></parallel-curricula-list>\n\t\t\t<parallel-curricula-edit ng-if="$root.refName == \'parallel_curricula_edit\'"></parallel-curricula-edit>\n\n\t\t\t<teacher-to-group ng-if="$root.refName === \'teacher_to_group\'"></teacher-to-group>\n\n\t\t\t<students-to-groups ng-if="$root.refName == \'students_to_groups\'"></students-to-groups>\n\n\t\t\t<student-to-groups ng-if="$root.refName == \'ezd.study_plan.student_to_groups\'"></student-to-groups>\n\n\t\t\t<student-to-curricula ng-if="$root.refName == \'ezd.study_plan.student_to_curricula\'"></student-to-curricula>\n\n\t\t\t<student-homebased ng-if="$root.refName == \'ezd.study_plan.homebased\'"></student-homebased>\n\n\t\t\t<study-plan-groups-subjects ng-if="$root.refName == \'study_plan_groups_subjects\'"></study-plan-groups-subjects>\n\n\t\t\t<study-plan-add-student-to-plan ng-if="$root.refName == \'study_plan_add_student_to_plan\'"></study-plan-add-student-to-plan>\n\n\t\t\t<study-plan-replacements ng-init="$root.closeMenu()" ng-if="$root.refName == \'study_plan_replacements\'"></study-plan-replacements>\n\t\t\t<study-plan-replacements-create ng-init="$root.closeMenu()" ng-if="$root.refName == \'study_plan_replacements_create\'"></study-plan-replacements-create>\n\n\t\t\t<study-plan-all-schedule-teacher ng-if="$root.refName === \'study_plan_all_schedule_teacher\'"></study-plan-all-schedule-teacher>\n\n\t\t\t<study-plan-teacher-load ng-if="$root.refName === \'study_plan_teacher_load\'"></study-plan-teacher-load>\n\n\t\t\t<study-plan-a-e-plan ng-if="$root.refName === \'ezd.study_plan.ae_plan\'"></study-plan-a-e-plan>\n\n\t\t\t<class-unit-to-curricula ng-if="$root.refName === \'ezd.study_plan.class_unit_to_curricula\'" ></class-unit-to-curricula>\n\n\t\t</div>\n\t\t<div class="b-right__nav_sidebar"\n\t\t\t id="stickOnScrollStudyPlanRightNav"\n\t\t\t ng-show="$root.closedMenu">\n\t\t\t<div ng-class="{\'fixed-right-nav\': $root.fixedRightNav}"\n\t\t\t\t stick-on-scroll\n\t\t\t\t stick-on-scroll-action="$root.setFixedRightNav"\n\t\t\t\t stick-on-scroll-reference="stickOnScrollStudyPlanRightNav">\n\n\t\t\t\t<parallel-curricula-list-right-nav ng-if="$root.refName == \'parallel_curricula\'"></parallel-curricula-list-right-nav>\n\t\t\t\t<parallel-curricula-edit-right-nav ng-if="$root.refName == \'parallel_curricula_edit\'"></parallel-curricula-edit-right-nav>\n\n\t\t\t\t<teacher-to-group-right-nav ng-if="$root.refName == \'teacher_to_group\'"></teacher-to-group-right-nav>\n\n\t\t\t\t<students-to-groups-right-nav ng-if="$root.refName == \'students_to_groups\'"></students-to-groups-right-nav>\n\n\t\t\t\t<student-to-groups-right-nav ng-if="$root.refName == \'ezd.study_plan.student_to_groups\'"></student-to-groups-right-nav>\n\n\t\t\t\t<student-to-curricula-right-nav ng-if="$root.refName == \'ezd.study_plan.student_to_curricula\'"></student-to-curricula-right-nav>\n\n\t\t\t\t<student-homebased-right-nav ng-if="$root.refName == \'ezd.study_plan.homebased\'"></student-homebased-right-nav>\n\n\t\t\t\t<study-plan-groups-subjects-right-nav ng-if="$root.refName == \'study_plan_groups_subjects\'"></study-plan-groups-subjects-right-nav>\n\n\t\t\t\t<study-plan-add-student-to-plan-right-nav ng-if="$root.refName == \'study_plan_add_student_to_plan\'"></study-plan-add-student-to-plan-right-nav>\n\n\t\t\t\t<all-schedule-teacher-right-nav ng-if="$root.refName === \'study_plan_all_schedule_teacher\'"></all-schedule-teacher-right-nav>\n\n\t\t\t\t<study-plan-replacements-right-nav ng-if="$root.refName == \'study_plan_replacements\'"></study-plan-replacements-right-nav>\n\t\t\t\t<study-plan-replacements-create-right-nav ng-if="$root.refName == \'study_plan_replacements_create\'"></study-plan-replacements-create-right-nav>\n\n\t\t\t\t<study-plan-teacher-load-right-nav ng-if="$root.refName === \'study_plan_teacher_load\'"></study-plan-teacher-load-right-nav>\n\n\t\t\t\t<study-plan-a-e-plan-right-nav ng-if="$root.refName === \'ezd.study_plan.ae_plan\'"></study-plan-a-e-plan-right-nav>\n\n\t\t\t\t<class-unit-to-curricula-right-nav ng-if="$root.refName === \'ezd.study_plan.class_unit_to_curricula\'"></class-unit-to-curricula-right-nav>\n\t\t\t\t\x3c!-- Общие элементы --\x3e\n\t\t\t\t\x3c!--<support-form-open-link></support-form-open-link>--\x3e\n\t\t\t\t\x3c!-- /Общие элементы --\x3e\n\t\t\t</div>\n\t\t</div>\n\n\n\t</main>\n\t<footer class="footer" footer></footer>\n\n\t\x3c!-- .footer --\x3e\n\n</div>\n\x3c!-- .wrapper --\x3e\n'
    },
    5929: function(e, t, n) {
        var a = {
            "./components/nav-right-main/AllScheduleTeacherRightNavDir.js": 5930,
            "./index.js": 2600,
            "./main/StudyPlanAllScheduleTeacherController.js": 5932,
            "./main/StudyPlanAllScheduleTeacherDir.js": 5933
        };
        function s(e) {
            var t = l(e);
            return n(t)
        }
        function l(e) {
            var t = a[e];
            if (!(t + 1)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND",
                n
            }
            return t
        }
        s.keys = function() {
            return Object.keys(a)
        }
        ,
        s.resolve = l,
        e.exports = s,
        s.id = 5929
    },
    5930: function(e, t, n) {
        "use strict";
        var a, s = n(5931), l = (a = s) && a.__esModule ? a : {
            "default": a
        };
        angular.module("ezd.study_plan.all_schedule_teacher").directive("allScheduleTeacherRightNav", function() {
            return {
                restrict: "E",
                template: l["default"]
            }
        })
    },
    5931: function(e, t) {
        e.exports = '<div check-profile="[\'school_admin\', \'deputy\']">\n\t<div class="r-st-filter__field" ng-if="showTemplate">\n\t\t<div class="r-st-filter__field-name">\n\t\t\tШаблоны\n\t\t</div>\n\t</div>\n\n\t<div class="b-nav_left-part" ng-if="showTemplate">\n\t\t<div class="b-right-panel__controls border_block">\n\t\t\t<a ng-click="applyTemplate()" href="">Применить к&nbsp;выбранным</a>\n\t\t</div>\n\t</div>\n\n\t\x3c!--Уровень образования--\x3e\n\t<div class="r-st-filter__field">\n\t\t<div class="r-st-filter__field-name">Уровень образования</div>\n\t\t<div ng-repeat="level in educationLevels"\n\t\t\t\t class="r-st-filter__field-name">\n\t\t\t<ezd-checkbox model="level.checked"\n\t\t\t\t\t\t\t\t\t\ton-change="filterClassLevels()">{{ ::level.name }}\n\t\t\t</ezd-checkbox>\n\t\t</div>\n\t</div>\n\t\x3c!--Конец уровень образования--\x3e\n\n\t\x3c!-- Параллели --\x3e\n\t<div class="r-st-filter__field">\n\t\t<div class="r-st-filter__field-name">\n\t\t\tПараллель\n\t\t</div>\n\t\t<select ng-model="filters.selectedClassLevel"\n\t\t\t\t\t\tng-options="class_level.id as class_level.name for class_level in filteredClassLevels | orderBy: natural(\'name\')">\n\t\t\t<option value="">Все</option>\n\t\t</select>\n\t</div>\n\t\x3c!-- Конец параллели --\x3e\n\n\t\x3c!-- Классы --\x3e\n\t<div class="r-st-filter__field">\n\t\t<div class="r-st-filter__field-name">\n\t\t\tКласс\n\t\t</div>\n\t\t<select ng-disabled="!filters.selectedClassLevel" ng-model="filters.selectedClassUnit"\n\t\t\t\t\t\tng-options="class_unit.id as class_unit.name for class_unit in class_units | filter:{class_level_id: filters.selectedClassLevel}:true | orderBy: natural(\'name\')">\n\t\t\t<option value="">Все</option>\n\t\t</select>\n\t</div>\n\t\x3c!-- Конец классы --\x3e\n\n\t\x3c!-- Здания --\x3e\n\t<div class="r-st-filter__field">\n\t\t<div class="r-st-filter__field-name">\n\t\t\tЗдание\n\t\t</div>\n\t\t<select ng-model="filters.selectedBuilding"\n\t\t\t\t\t\tng-options="building.id as building.name for building in buildings | orderBy: natural(\'name\')">\n\t\t</select>\n\t</div>\n\t\x3c!-- Конец здания --\x3e\n\n\t\x3c!-- Панель разложения --\x3e\n\t<div class="all-schedule-expansion-panel">\n\t\t<div class="all-schedule-expansion-panel-old" ng-click="setExpansionType(\'old\')"\n\t\t\t\t ng-class="{\'all-schedule-expansion-panel-active\':expansionType === \'old\'}">\n\t\t\t\x3c!-- Вперёд - назад --\x3e\n\t\t\t<div class="ts-container__variants sj-container_variants">\n\t\t\t\t<div class="tw_line-container__variant" ng-class="{\'ts-container__variant-active\':directionExpanded === \'back\'}"\n\t\t\t\t\t\t ng-click="setDirectionExpanded(\'back\')"\n\t\t\t\t\t\t style="width: 54px; padding: 9px 5px;">\n\t\t\t\t\t<span>НАЗАД</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="tw_line-marker_container" style="left: 55px;"></div>\n\t\t\t\t<div class="tw_line-container__variant"\n\t\t\t\t\t\t ng-class="{\'ts-container__variant-active\':directionExpanded === \'forward\'}"\n\t\t\t\t\t\t ng-click="setDirectionExpanded(\'forward\')"\n\t\t\t\t\t\t style="width: 54px; padding: 9px 5px;">\n\t\t\t\t\t<span>ВПЕРЕД</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\x3c!-- Конец вперёд - назад --\x3e\n\n\t\t\t\x3c!-- Разложить через N недель --\x3e\n\t\t\t<a style="margin-left: 5px; font-size: 13px;" class="r-building_add__link"\n\t\t\t\t ng-class="{\'r-building_add__link-active\':period === 1}"\n\t\t\t\t ng-click="setPeriod(1)">На каждую неделю</a>\n\t\t\t<br>\n\t\t\t<a style="margin-left: 5px; font-size: 13px;" class="r-building_add__link"\n\t\t\t\t ng-class="{\'r-building_add__link-active\':period === 2}"\n\t\t\t\t ng-click="setPeriod(2)">Через неделю\n\t\t\t</a>\n\t\t\t<br>\n\t\t\t<a style="margin-left: 5px; font-size: 13px;" class="r-building_add__link"\n\t\t\t\t ng-class="{\'r-building_add__link-active\':period === 3}"\n\t\t\t\t ng-click="setPeriod(3)">Через 2 недели</a>\n\t\t\t<br>\n\t\t\t\x3c!-- Конец разложить через N недель --\x3e\n\n\t\t\t\x3c!-- Количество недель --\x3e\n\t\t\t<div class="r-st-filter__field">\n\t\t\t\t<div class="r-st-filter__field-name">\n\t\t\t\t\tКоличество недель\n\t\t\t\t</div>\n\t\t\t\t<select style="width: 110px;" ng-model="filters.copyQuantity"\n\t\t\t\t\t\t\t\tng-options="opt as opt for opt in copyWeeksNumber">\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t\x3c!-- Конец количества недель --\x3e\n\n\t\t</div>\n\t\t\x3c!-- Маркер между плашками --\x3e\n\t\t<div class="tw_line-marker_container" style="top: 231px; left: 56px"></div>\n\t\t\x3c!-- Конец маркер между плашками --\x3e\n\t\t<div class="all-schedule-expansion-panel-new r-st-filter__field" ng-click="setExpansionType(\'new\')"\n\t\t\t\t ng-class="{\'all-schedule-expansion-panel-active\':expansionType === \'new\'}">\n\t\t\t<div class="r-st-filter__field-name">\n\t\t\t\tНа неделю\n\t\t\t</div>\n\t\t\t<div class="schedule-week-list">\n\t\t\t\t<div ng-repeat="opt in newExpansionWeeks">\n\t\t\t\t\t<input type="checkbox" id="opt-{{::opt}}" ng-checked="filters.selectExpansionWeeks.indexOf(opt) > -1">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<span ng-click="setExpansionWeek(opt)"></span>\n\t\t\t\t\t</label>\n\t\t\t\t\t<span class="schedule-opt-name">{{::opt}}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\t\x3c!-- Конец панель разложения --\x3e\n\n\t\x3c!-- Кнопка разложить --\x3e\n\t<div class="b-nav_left-part">\n\t\t<div class="b-right-panel__controls border_block" style="margin: 10px;">\n\t\t\t<a ng-click="applySchedule()" href="">Разложить</a>\n\t\t</div>\n\t</div>\n\t\x3c!-- Конец кнопка разложить --\x3e\n</div>\n'
    },
    5932: function(e, t, n) {
        "use strict";
        var a = c(n(66))
          , s = c(n(32))
          , l = c(n(67))
          , i = c(n(54))
          , r = c(n(157));
        function c(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function d(e) {
            return Boolean(e > 0 && e < 41)
        }
        angular.module("ezd.study_plan.all_schedule_teacher").controller("StudyPlanAllScheduleTeacherController", ["$scope", "$rootScope", "$location", "$q", "$$schedules", "flashAlert", "$$academicYear", "$$classLevel", "$$classUnit", "bigQuery", "$$building", "$$profile", "$mdDialog", "$cookies", "$$timetable", "$$educationLevel", function(e, t, n, c, o, u, p, f, h, m, v, g, k, b, y, x) {
            var w, $, N = (w = regeneratorRuntime.mark(function D() {
                var e;
                return regeneratorRuntime.wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            x.collection.getList();
                        case 2:
                            return e = t.sent,
                            t.abrupt("return", (0,
                            r["default"])({
                                id: 4
                            }, e));
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }, D, this)
            }),
            $ = function() {
                var e = w.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function a(s, l) {
                        try {
                            var i = e[s](l)
                              , r = i.value
                        } catch (c) {
                            return void n(c)
                        }
                        if (!i.done)
                            return Promise.resolve(r).then(function(e) {
                                a("next", e)
                            }, function(e) {
                                a("throw", e)
                            });
                        t(r)
                    }("next")
                }
                )
            }
            ,
            function() {
                return $.apply(this, arguments)
            }
            );
            t.refName = "study_plan_all_schedule_teacher",
            t.displayMode = "schedule_teacher",
            t.closedMenu = !0,
            e.templateId = null,
            e.checkedWeek = [],
            e.filters = {
                copyQuantity: 1
            };
            var W = void 0
              , E = n.search();
            E && E.show_template && (e.showTemplate = !0),
            e.directionExpanded = "forward",
            e.expansionType = "old",
            e.period = 1,
            e.filters.selectExpansionWeeks = [];
            var S = void 0
              , T = void 0;
            e.newExpansionWeeks = _.range(1, 41),
            e.copyWeeksNumber = _.range(1, 21),
            t.global_promise = c.all([p.getSelected(), f.collection.getList(), h.collection.getList({
                with_home_based: !0
            }), v.collection.getList(), g.getCurrentProfile(), N()]).then(function(t) {
                e.academic_year = t[0],
                W = t[2];
                var n = _.chain(W.plain()).map(function(e) {
                    return e.class_level_id
                }).uniq().value();
                return e.class_levels = t[1].filter(function(e) {
                    return n.includes(e.id)
                }),
                e.filteredClassLevels = e.class_levels,
                e.profile = t[4],
                e.buildings = t[3].filter(function(t) {
                    return e.profile.building_ids.includes(t.id)
                }),
                e.educationLevels = t[5],
                m.queue.getList(y.collection, {
                    academic_year_id: e.academic_year.id,
                    is_template: !1,
                    with_assignments: !0,
                    with_no_assignments: !1
                }, 150)
            }).then(function(t) {
                var n = _.chain(t).filter(function(t) {
                    return e.buildings.map(function(e) {
                        return e.id
                    }).includes(t.building_id)
                }).map(function(e) {
                    return e.assignments
                }).flatten().map(function(e) {
                    return e.class_unit_id
                }).uniq().value();
                e.class_units = W.filter(function(e) {
                    return n.includes(e.id)
                })
            }).then(function() {
                o.getSchedules(e.academic_year, !0).then(function(t) {
                    e.schedules = t,
                    e.weeks = [],
                    e.schedule_template = [];
                    var n = moment(e.academic_year.begin_date).weekday(0).toDate()
                      , a = moment(n).format("DD.MM")
                      , s = moment(n).add(6, "day").toDate()
                      , l = moment(s).format("DD.MM")
                      , i = []
                      , r = function(t) {
                        !0 === t.is_template && -1 === i.indexOf(t.id) && (e.schedule_template.push(t),
                        i.push(t.id)),
                        S === t.week_number && (t.week_start = a,
                        t.week_end = l,
                        e.weeks.push(t),
                        T = !0)
                    };
                    for (S = 1; S < 41; S += 1)
                        T = !1,
                        _.forEach(e.schedules, r),
                        !1 === T && e.weeks.push({
                            week_number: S,
                            week_start: a,
                            week_end: l,
                            end_date: s,
                            id: -1,
                            schedule_items_count: 0,
                            hours_count: 0
                        }),
                        n = moment(n).add(1, "week").toDate(),
                        a = moment(n).format("DD.MM"),
                        s = moment(n).add(6, "day").toDate(),
                        l = moment(s).format("DD.MM")
                })
            }),
            e.showSchedule = function(a, s, l) {
                l.preventDefault(),
                t.schedule_id = s,
                s > -1 ? n.path("/schedules/teacher/" + s) : o.createSchedule(e.academic_year, a).then(function(e) {
                    t.schedule_id = e.id,
                    n.path("/schedules/teacher/" + e.id)
                })
            }
            ,
            e.setTemplate = function(t) {
                e.templateId === t ? e.templateId = null : e.templateId = t
            }
            ,
            e.showDelete = function(t) {
                return !!b.get("is_support") || (_.intersects(e.profile.roles, ["school_admin", "deputy"]) ? moment(t.end_date).isAfter(moment(), "d") : void 0)
            }
            ,
            e.deleteSchedule = function(n) {
                void 0 !== n && -1 !== n ? confirm("Удалить?") && (t.global_promise = o.removeSchedule(n).then(function() {
                    var t = _.find(e.weeks, {
                        id: n
                    });
                    t ? (t.schedule_items_count = 0,
                    t.hours_count = 0) : _.remove(e.schedule_template, {
                        id: n
                    })
                })) : u.error("Не найдено расписание или шаблон")
            }
            ,
            e.setWeek = function(t) {
                "back" === e.directionExpanded && (e.expandedWeeks = _.range(1, t));
                var n = e.checkedWeek.indexOf(t);
                n > -1 ? e.checkedWeek.splice(n, 1) : e.checkedWeek.push(t)
            }
            ,
            e.getWeekClass = function(t) {
                var n = [];
                return e.checkedWeek.indexOf(t) > -1 && n.push("b-pattern__week-active-strong"),
                n
            }
            ,
            e.applyTemplate = function() {
                if (e.templateId)
                    if (0 !== e.checkedWeek.length) {
                        var n = {
                            academic_year_id: e.academic_year.id,
                            week_numbers: e.checkedWeek
                        };
                        t.global_promise = m.post(o.bindOne(e.templateId).all("copy"), n, "week_numbers", 1).then(function(t) {
                            if (9 === t.code)
                                u.error(t.message);
                            else {
                                var n = t;
                                _.forEach(n, function(t) {
                                    var n = !1;
                                    _.forEach(e.weeks, function(e) {
                                        e.week_number === t.week_number && (e.id = t.id,
                                        e.schedule_items_count = t.schedule_items_count,
                                        e.hours_count = t.hours_count,
                                        n = !0)
                                    }),
                                    !1 === n && e.weeks.push(t)
                                }),
                                u.success("Шаблон успешно применён к неделям")
                            }
                        })
                    } else
                        u.error("Не выбрана неделя");
                else
                    u.error("Не выбран шаблон расписания")
            }
            ,
            e.applySchedule = function() {
                var n = e.checkedWeek[0]
                  , a = _.find(e.schedules, {
                    week_number: n
                })
                  , s = void 0
                  , l = {
                    academic_year_id: e.academic_year.id,
                    building_id: e.filters.selectedBuilding,
                    week_numbers: []
                }
                  , r = e.filters.copyQuantity;
                if (a && (s = a.id),
                s)
                    if (0 === e.checkedWeek.length)
                        u.error("Не выбрано расписание для клонирования");
                    else if (1 === e.checkedWeek.length) {
                        if (e.filters.selectedClassUnit)
                            l.class_unit_id = e.filters.selectedClassUnit;
                        else if (e.filters.selectedClassLevel) {
                            if (!confirm("Вы уверены, что хотите скопировать расписание всей параллели?"))
                                return;
                            l.class_level_ids = [e.filters.selectedClassLevel]
                        } else
                            l.class_level_ids = e.filters.selectedClassLevel ? [e.filters.selectedClassLevel] : (0,
                            i["default"])("id", e.filteredClassLevels);
                        if ("old" === e.expansionType)
                            if ("back" === e.directionExpanded)
                                for (n -= e.period; r && d(n); )
                                    l.week_numbers.push(n),
                                    n -= e.period,
                                    r -= 1;
                            else
                                for (n += e.period; r && d(n); )
                                    l.week_numbers.push(n),
                                    n += e.period,
                                    r -= 1;
                        else {
                            if (0 === e.filters.selectExpansionWeeks.length)
                                return void u.error("Не выбрана неделя");
                            if (e.filters.selectExpansionWeeks.indexOf(e.checkedWeek[0]) > -1)
                                return void u.error("Нельзя скопировать неделю на саму себя");
                            l.week_numbers = e.filters.selectExpansionWeeks
                        }

                        t.global_promise = o.bindOne(s).all("copy").customPOST(l).then(function(t) {
                            var n = JSON.parse(t.result)
                              , a = void 0;
                            9 === n.code ? u.error(n.message) : (_.forEach(n, function(t) {
                                a = !1,
                                _.forEach(e.weeks, function(e) {
                                    e.week_number === t.week_number && (e.id = t.id,
                                    e.schedule_items_count = t.schedule_items_count,
                                    e.hours_count = t.hours_count,
                                    a = !0)
                                }),
                                a || e.weeks.push(t)
                            }),
                            u.success(t.message))
                        })
                    } else
                        u.error("Выберите только одно расписание для клонирования");
                else
                    u.error("Расписания не существует")
            }
            ,
            e.setDirectionExpanded = function(t) {
                e.directionExpanded = t
            }
            ,
            e.setExpansionType = function(t) {
                e.expansionType = t
            }
            ,
            e.setExpansionWeek = function(t) {
                var n = e.filters.selectExpansionWeeks.indexOf(t);
                n > -1 ? e.filters.selectExpansionWeeks.splice(n, 1) : e.filters.selectExpansionWeeks.push(t)
            }
            ,
            e.setPeriod = function(t) {
                e.period = t
            }
            ,
            e.cleanWeeks = function(t) {
                var n = moment()
                  , a = [];
                return e.badWeeks = [],
                _.forEach(t, function(t) {
                    var s = _.find(e.weeks, {
                        week_number: t
                    });
                    n.isAfter(s.begin_date) || n.isSame(s.begin_date) ? e.badWeeks.push(t) : a.push(t)
                }),
                a
            }
            ,
            e.$watch(function() {
                return e.filters.selectedClassLevel
            }, function() {
                delete e.filters.selectedClassUnit
            }),
            e.openDownloadDialog = function(e) {
                k.show({
                    parent: angular.element(document.body),
                    targetEvent: e,
                    template: "<schedules-download></schedules-download>",
                    title: "",
                    clickOutsideToClose: !0,
                    isolateScope: !0
                })
            }
            ,
            e.filterClassLevels = function() {
                var t = (0,
                s["default"])((0,
                a["default"])("checked"), (0,
                i["default"])("id"))(e.educationLevels);
                e.filteredClassLevels = (0,
                a["default"])(function(e) {
                    return 0 === t.length || (0,
                    l["default"])(e.education_level_id, t)
                })(e.class_levels)
            }
        }
        ])
    },
    5933: function(e, t, n) {
        "use strict";
        var a, s = n(5934), l = (a = s) && a.__esModule ? a : {
            "default": a
        };
        angular.module("ezd.study_plan.all_schedule_teacher").directive("studyPlanAllScheduleTeacher", [function() {
            return {
                restrict: "E",
                template: l["default"]
            }
        }
        ])
    },
    5934: function(e, t) {
        e.exports = '<div class="b-container__wrap">\n\n\t\t<div class="all-schedule-button-wrapper">\n\t\t\t<a class="download-button" href="" ng-click="openDownloadDialog($event)">Выгрузка расписания</a>\n\t\t\t<a class="download-button" href="/reports/schedules/teachers">Расширенная выгрузка расписания</a>\n\t\t</div>\n\n    <div class="b-pattern_schedules-head" ng-if="showTemplate">\n        <div class="b-pattern_schedules-head__title">\n            <span>ШАБЛОНЫ РАСПИСАНИЯ</span>\n        </div>\n\n        <div class="b-pattern_schedules__columns">\n            <div id="schedule-{{::temp.id}}" class="b-pattern_column b-pattern_column" ng-class="templateId === temp.id ? \'b-pattern__week-active\': \'\'" ng-click="setTemplate(temp.id)" ng-repeat="temp in schedule_template">\n                <input type="checkbox" ng-checked="templateId === temp.id" class="b-pattern_check" id="{{::temp.id}}">\n                <label><span></span></label>\n                <span class="b-pattern_item" title="{{::temp.name}}">{{::temp.name | cut:15}}<br/><i class="b-pattern_item_watch">{{::temp.schedule_items_count}}</i></span>\n                <i class="b-icon__edit" ng-click="showSchedule(null, temp.id)"></i>\n                <div check-profile="[\'school_admin\', \'deputy\']">\n                    <i class="b-icon__remove"\n                       ng-click="deleteSchedule(temp.id, null)"></i>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="b-pattern_schedules-body">\n        <div class="b-pattern_schedules-head__title">\n            <span>НЕДЕЛИ</span>\n        </div>\n\n        <div class="b-pattern_schedules__columns">\n            <div class="b-pattern_column"\n                 ng-click="setWeek(week.week_number)"\n                 ng-class="getWeekClass(week.week_number)"\n                 ng-repeat="week in weeks">\n                <input type="checkbox" ng-checked="checkedWeek.indexOf(week.week_number) > -1" class="b-pattern_check" id="week-{{::week.week_number}}">\n                <label><span></span></label>\n                <span class="b-pattern__week">{{::week.week_number}}</span>\n\t            <span class="b-pattern_item">{{::week.week_start}}-{{::week.week_end}} <br/>\n\t                <i class="b-pattern_item_watch">{{week.schedule_items_count}}/{{week.hours_count}}</i>\n                </span>\n                <a class="b-icon__edit" ng-href="{{week.id?\'/schedules/teacher/\'+week.id:null}}"\n                   ng-click="showSchedule(week.week_number, week.id, $event)"></a>\n\t            <div ng-if="::showDelete(week)">\n                    <i class="b-icon__remove" ng-click="deleteSchedule(week.id, week.week_number)"></i>\n                </div>\n            </div>\n        </div>\n        </div>\n\n    </div>\n</div>\n'
    }
}]);
