<template>
  <q-page class="row justify-center q-pa-md gutter-md">
    <div class="col-xs-12 section">
      <div class="q-display-2">Typography</div>
      <hr>

      <h1>Light 112sp</h1>
      <!-- or: -->
      <div class="q-display-4">Light 112sp</div>

      <h2>Regular 56sp</h2>
      <!-- or: -->
      <div class="q-display-3">Regular 56sp</div>

      <h3>Regular 45sp</h3>
      <!-- or: -->
      <div class="q-display-2">Regular 45sp</div>

      <h4>Regular 34sp</h4>
      <!-- or: -->
      <div class="q-display-2">Regular 34sp</div>

      <h5>Regular 24sp</h5>
      <!-- or: -->
      <div class="q-headline">Regular 24sp</div>

      <h6>Medium 20sp</h6>
      <!-- or: -->
      <div class="q-title">Medium 20sp</div>

      <div class="q-subheading">Regular 16sp</div>

      <div class="q-body-2">Medium 14sp</div>

      <div class="q-body-1">Regular 14sp</div>

      <div class="q-caption">Regular 12sp</div>
    </div>

    <div class="col-xs-12 section">
      <div class="q-display-2">Buttons</div>
      <hr>

      <div class="row">
        <div class="col-md-6 col-xs-12">
          <div>
            <p class="caption">Standard Button</p>
            <q-btn color="primary" label="Primary"/>
            <q-btn color="secondary" label="Secondary"/>
          </div>

          <div>
            <p class="caption">Custom Color Examples</p>
            <q-btn style="background: #FF0080; color: white" label="Fuchsia"/>
            <q-btn flat style="color: #FF0080" label="Fuchsia Flat"/>
            <q-btn outline style="color: goldenrod;" label="Goldenrod"/>
          </div>

          <div>
            <p class="caption">Button with icons</p>
            <q-btn color="primary" icon="mail" label="On Left"/>
            <q-btn color="secondary" icon-right="mail" label="On Right"/>
            <q-btn color="red" icon="mail" icon-right="send" label="On Left and Right"/>
          </div>

          <div>
            <p class="caption">Button with custom text color</p>
            <q-btn color="amber" text-color="purple" icon="camera_enhance" label="Purple text"/>
          </div>

          <div>
            <p class="caption">Round Button</p>
            <q-btn round color="primary" icon="shopping_cart"/>
            <q-btn round color="secondary" icon="navigation"/>
          </div>

          <div>
            <p class="caption">Custom sizes</p>
            <q-btn color="primary" size="xs" icon="navigation" label="button size"/>
            <q-btn color="secondary" size="md" icon="navigation" label="button size"/>
            <q-btn color="secondary" size="1.5rem" icon="navigation" label="button size"/>
          </div>
        </div>

        <div class="col-md-6 col-xs-12">
          <div>
            <p class="caption">Flat button</p>
            <q-btn flat color="primary" label="Flat"/>
            <q-btn flat rounded color="primary" label="Flat Rounded"/>
            <q-btn flat round color="primary" icon="card_giftcard"/>
          </div>

          <div>
            <p class="caption">Outline buttons</p>
            <q-btn outline color="primary" label="Outline"/>
            <q-btn outline rounded color="primary" label="Outline Rounded"/>
            <q-btn outline round color="primary" icon="card_giftcard"/>
          </div>

          <div>
            <p class="caption">Push button</p>
            <q-btn push color="primary" label="Push"/>
            <q-btn push rounded color="primary" label="Push Rounded"/>
            <q-btn push round color="primary" icon="card_giftcard"/>
          </div>

          <div>
            <p class="caption">Block button</p>
            <q-btn color="primary" class="block" icon="alarm" label="Block"/>
            <q-btn color="secondary" class="block" label="Block"/>
          </div>

          <div>
            <p class="caption">Full width button (or use flex classes on parent)</p>
            <q-btn color="primary" class="full-width q-mb-sm" label="Full-width"/>
            <q-btn color="secondary" class="full-width" label="Full-width"/>
          </div>
        </div>
      </div>
    </div>

    <div class="col-xs-12 section">
      <div class="q-display-2">Navigation</div>
      <hr>
      <p class="caption">Basic toolbar</p>
      <q-toolbar color="secondary" class="q-mb-md">
        <q-toolbar-title>Toolbar title</q-toolbar-title>
        <q-btn flat round dense icon="menu"/>
      </q-toolbar>

      <p class="caption">Tab Panes below (shadow, animated, swipeable)</p>
      <q-tabs class="shadow-1 q-mb-md" animated swipeable color="primary" align="center">
        <q-tab default name="mails" slot="title" icon="mail" label="Mails"/>
        <q-tab name="alarms" slot="title" icon="alarm" label="Alarms"/>
        <q-tab name="movies" slot="title" icon="movie" label="Movies"/>

        <q-tab-pane name="mails">Emails tab</q-tab-pane>
        <q-tab-pane name="alarms">Alarms tab</q-tab-pane>
        <q-tab-pane name="movies">Movies tab</q-tab-pane>
      </q-tabs>

      <p class="caption">Tab Panes below (inverted)</p>
      <q-tabs class="q-mb-md" animated swipeable inverted color="secondary" align="justify">
        <q-tab default name="mails" slot="title" icon="mail" label="Mails"/>
        <q-tab name="alarms" slot="title" icon="alarm" label="Alarms"/>
        <q-tab name="movies" slot="title" icon="movie" label="Movies"/>

        <q-tab-pane name="mails">Emails tab</q-tab-pane>
        <q-tab-pane name="alarms">Alarms tab</q-tab-pane>
        <q-tab-pane name="movies">Movies tab</q-tab-pane>
      </q-tabs>
    </div>

    <div class="col-xs-12 section">
      <div class="q-display-2">Cards</div>
      <hr>
      <div class="row">
        <div class="col-md-4 col-xs-12 q-pa-sm">
          <q-card>
            <q-card-title>Card Title</q-card-title>
            <q-card-separator/>
            <q-card-main>Card Content</q-card-main>
          </q-card>
        </div>

        <div class="col-md-4 col-xs-12 q-pa-sm">
          <q-card color="secondary" dark>
            <q-card-title>
              Title
              <span slot="subtitle">Subtitle</span>
              <q-icon slot="right" name="alarm"/>
            </q-card-title>
            <q-card-main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nemo odio quos provident non error eveniet velit autem quasi explicabo.</q-card-main>
            <q-card-separator/>
            <q-card-actions>
              <q-btn flat>Action 1</q-btn>
              <q-btn flat>Action 2</q-btn>
            </q-card-actions>
          </q-card>
        </div>

        <div class="col-md-4 col-xs-12 q-pa-sm">
          <q-card>
            <q-card-media>
              <img src="../assets/mountains.jpg">
            </q-card-media>
            <q-card-title>
              Title
              <span slot="subtitle">Subtitle</span>
            </q-card-title>
            <q-card-main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab unde est magni obcaecati nulla deserunt.</q-card-main>
            <q-card-separator inset/>
            <q-card-actions>
              <q-btn flat>Action 1</q-btn>
              <q-btn flat>Action 2</q-btn>
            </q-card-actions>
          </q-card>
        </div>

        <div class="col-md-4 col-xs-12 q-pa-sm">
          <q-card>
            <q-card-title>List in card</q-card-title>

            <q-card-separator/>

            <q-list>
              <q-item>
                <q-item-side>
                  <q-item-tile color="primary" icon="local bar"/>
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Bar XYZ</q-item-tile>
                  <q-item-tile sublabel>Have a drink.</q-item-tile>
                </q-item-main>
              </q-item>

              <q-item>
                <q-item-side>
                  <q-item-tile color="red" icon="local gas station"/>
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Gas Station</q-item-tile>
                  <q-item-tile sublabel>Fill your gas tank.</q-item-tile>
                </q-item-main>
              </q-item>

              <q-item>
                <q-item-side>
                  <q-item-tile color="amber" icon="local movies"/>
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>Cinema XYZ</q-item-tile>
                  <q-item-tile sublabel>Watch a movie.</q-item-tile>
                </q-item-main>
              </q-item>

              <q-collapsible icon="explore" label="First">
                <div>Lorem ipsum dolor sit amet...</div>
              </q-collapsible>

              <q-collapsible icon="perm_identity" label="Second">
                <div>Lorem ipsum dolor sit amet...</div>
              </q-collapsible>
            </q-list>
          </q-card>
        </div>
      </div>
    </div>

    <div class="col-xs-12 section">
      <div class="q-display-2">Collapsible (Accordion)</div>
      <hr>

      <div class="row">
        <div class="col-md-4 col-xs-12 q-pa-sm">
          <p class="caption">Basic collapsible item</p>
          <q-collapsible icon="explore" label="Explore">
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores impedit, distinctio quo nisi animi expedita!</div>
          </q-collapsible>
        </div>

        <div class="col-md-4 col-xs-12 q-pa-sm">
          <p class="caption">Basic collapsible item</p>
          <q-list separator>
            <q-collapsible avatar="../assets/boy-avatar.jpg" label="With avatar">
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, impedit.</div>
            </q-collapsible>

            <q-collapsible icon="drafts" label="Disabled" disable>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, consequuntur.</div>
            </q-collapsible>

            <q-collapsible letter="J" right-avatar="../assets/boy-avatar.jpg" label="Jim">
              <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quas?</div>
            </q-collapsible>
          </q-list>
        </div>

        <div class="col-md-4 col-xs-12 q-pa-sm">
          <p class="caption">Group a.k.a Accordion (opening one closes the other)</p>
          <q-list>
            <q-collapsible group="somegroup" icon="explore" label="First" opened>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, ea!</div>
            </q-collapsible>
            <q-collapsible
              group="somegroup"
              icon="perm_identity"
              label="Second"
              header-class="text-red"
            >
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, earum!</div>
            </q-collapsible>
            <q-collapsible group="somegroup" icon="shopping_cart" label="Third">
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, enim.</div>
            </q-collapsible>
          </q-list>
        </div>
      </div>
    </div>

    <div class="col-xs-12 section">
      <div class="q-display-2">Data table</div>
      <hr>
      <p class="caption">Sortable Data table</p>
      <q-table title="Table Title" :data="tableData" :columns="columns" row-key="name"/>
    </div>

    <div class="col-xs-12 section">
      <div class="q-display-2">List</div>
      <hr>

      <div class="row">
        <div class="col-md-6 col-xs-12 q-pa-sm">
          <p class="caption">Highlighted Email list</p>

          <q-list highlight inset-separator>
            <q-item>
              <q-item-side avatar="../assets/boy-avatar.jpg"/>
              <q-item-main
                label="Brunch this weekend? Brunch this weekend? Brunch this weekend?"
                label-lines="1"
              />
              <q-item-side right stamp="1 min"/>
            </q-item>
            <q-item multiline>
              <q-item-side avatar="../assets/boy-avatar.jpg"/>
              <q-item-main
                label="Brunch this weekend? Brunch this weekend? Brunch this weekend?"
                label-lines="1"
                sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe"
                sublabel-lines="2"
              />
              <q-item-side right>
                <q-item-tile stamp>1 week ago</q-item-tile>
              </q-item-side>
            </q-item>
            <q-item multiline>
              <q-item-side avatar="../assets/boy-avatar.jpg"/>
              <q-item-main
                label="Brunch this weekend? Brunch this weekend? Brunch this weekend?"
                label-lines="2"
                sublabel="John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe John Doe"
              />
              <q-item-side right stamp="10 min"/>
            </q-item>
          </q-list>
        </div>

        <div class="col-md-6 col-xs-12 q-pa-sm">
          <p class="caption">Plain list</p>

          <q-list inset-separator class="q-mt-md">
            <q-item>
              <q-item-side avatar="../assets/boy-avatar.jpg"/>
              <q-item-main label="Brunch this weekend?"/>
              <q-item-side right>
                <q-btn flat round dense icon="more_vert">
                  <q-popover>
                    <q-list link>
                      <q-item v-close-overlay>
                        <q-item-main label="Reply"/>
                      </q-item>
                      <q-item v-close-overlay>
                        <q-item-main label="Forward"/>
                      </q-item>
                      <q-item v-close-overlay>
                        <q-item-main label="Delete"/>
                      </q-item>
                    </q-list>
                  </q-popover>
                </q-btn>
              </q-item-side>
            </q-item>
            <q-item>
              <q-item-side avatar="../assets/boy-avatar.jpg"/>
              <q-item-main label="Brunch this weekend?"/>
              <q-item-side right>
                <q-chip square color="primary" class="shadow-2">10k</q-chip>
              </q-item-side>
            </q-item>
            <q-item>
              <q-item-side avatar="../assets/boy-avatar.jpg"/>
              <q-item-main label="Brunch this weekend?"/>
              <q-item-side right>
                <q-item-tile stamp>10 min ago</q-item-tile>
                <span class="text-amber">
                  <q-item-tile icon="star" v-for="n in 2" :key="n"/>
                </span>
              </q-item-side>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>

    <div class="col-xs-12 section">
      <div class="q-display-2">Form components</div>
      <hr>

      <div class="row">
        <div class="col-md-4 col-xs-12 q-pa-sm">
          <p class="q-display-2">Field</p>

          <q-field :count="10" helper="Some helper" class="q-mb-lg">
            <q-input v-model="text"/>
          </q-field>

          <q-field icon="wifi" :count="10" helper="Some helper" class="q-mb-lg">
            <q-input v-model="text" float-label="Input float label"/>
          </q-field>

          <p class="caption q-mb-lg">Error/warning states</p>
          <q-toggle class="q-ma-xs" v-model="error" color="negative" label="Toggle error state"/>
          <q-toggle class="q-ma-xs" v-model="warning" color="warning" label="Toggle warning state"/>

          <q-field
            :count="10"
            helper="Some helper"
            :error="error"
            error-label="Oops, we got an error."
            :warning="warning"
            warning-label="Hey, we got a warning."
            class="q-mb-md"
          >
            <q-input v-model="text"/>
          </q-field>

          <q-field
            icon="wifi"
            :count="10"
            helper="Some helper"
            :error="error"
            error-label="Oops, we got an error."
            :warning="warning"
            warning-label="Hey, we got a warning."
            class="q-mb-md"
          >
            <q-input v-model="text" float-label="Input float label"/>
          </q-field>

          <q-field
            :count="10"
            helper="Some helper"
            :error="error"
            error-label="Oops, we got an error."
            :warning="warning"
            warning-label="Hey, we got a warning."
            class="q-mb-md"
          >
            <q-input inverted v-model="text"/>
          </q-field>
        </div>

        <div class="col-md-4 col-xs-12 q-pa-sm">
          <p class="q-display-2">Input Text Field</p>
          <q-input v-model="text"/>
          <q-input v-model="text" placeholder="Placeholder"/>
          <q-input v-model="text" stack-label="Stack label"/>
          <q-input v-model="text" float-label="Float label"/>
          <q-input
            v-model="text"
            float-label="Float label & placeholder"
            placeholder="Placeholder"
          />
          <q-input v-model="email" type="email" float-label="Email" suffix="@gmail.com"/>
          <q-input v-model="password" type="password" float-label="Password"/>
          <q-input
            v-model="password"
            type="password"
            float-label="Password with no toggle button"
            no-pass-toggle
          />
          <q-input v-model="text" placeholder="Clearable" class="q-mb-md" clearable/>

          <div class="caption q-mb-md">Textarea (auto-grows)</div>
          <q-input v-model="area" type="textarea" class="q-mb-md"/>

          <div class="caption q-mb-md">With loading state</div>
          <q-toggle v-model="loading" label="Toggle loading state"/>
          <q-input :loading="loading" v-model="text"/>
        </div>

        <div class="col-md-4 col-xs-12 q-pa-sm">
          <p class="q-display-2">Chips input</p>

          <p class="caption">
            <span class="desktop-only">Click</span>
            <span class="mobile-only">Tap</span>
            on Chips Textbox below to start adding or removing Chips.
            <br>The Backspace key removes previously entered Chip if textfield is empty.
          </p>
          <p class="caption">Works great with Autocomplete so you might want to check its page.</p>
          <br>

          <span class="chip-container">
            <q-chip square color="secondary">Model: {{ chips1 }}</q-chip>
          </span>
          <q-chips-input v-model="chips1" placeholder="Type some names"/>
          <q-chips-input
            color="secondary"
            v-model="chips2"
            placeholder="Type some names"
            float-label="Float label"
          />
          <q-chips-input
            color="tertiary"
            v-model="chips2"
            add-icon="done"
            float-label="Custom add icon (type something)"
          />
        </div>

        <div class="col-md-4 col-xs-12 q-pa-sm">
          <p class="q-display-2">Search</p>

          <q-search v-model="model" no-icon/>
          <q-search v-model="model"/>
          <q-search icon="place" color="amber" v-model="model" stack-label="Seach for a place"/>
          <q-search
            icon="local_airport"
            color="secondary"
            v-model="model"
            float-label="Search for an airport"
            suffix="@ nearby"
          />
        </div>

        <div class="col-md-4 col-xs-12 q-pa-sm">
          <p class="q-display-2">Radio</p>

          <p class="caption">Standard</p>
          <q-radio v-model="radio1" val="one"/>
          <q-radio v-model="radio1" val="two" color="secondary" style="margin-left: 10px"/>
          <q-radio v-model="radio1" val="three" color="black" style="margin-left: 10px"/>

          <p class="caption">With label</p>
          <q-radio v-model="radio2" val="one" color="secondary" label="One"/>
          <q-radio v-model="radio2" val="two" color="amber" label="Two" style="margin-left: 10px"/>
          <q-radio
            v-model="radio2"
            val="three"
            color="red"
            label="Three"
            style="margin-left: 10px"
          />
          <br>
          <br>

          <p class="q-display-2 q-mt-md">Checkbox</p>

          <p class="caption">Standard</p>
          <q-checkbox v-model="check1"/>

          <p class="caption">With label</p>
          <q-checkbox v-model="check2" color="secondary" label="Tick me"/>

          <p class="caption">With label on left side</p>
          <q-checkbox v-model="check3" color="amber" label="Tick me" left-label/>

          <p class="caption">With indeterminate state</p>
          <q-checkbox toggle-indeterminate v-model="indet" color="red" label="Tick me (3 states)"/>

          <p class="caption">With custom icons</p>
          <q-checkbox
            v-model="check4"
            checked-icon="sentiment very satisfied"
            unchecked-icon="sentiment very dissatisfied"
          />
          <q-checkbox
            v-model="check5"
            checked-icon="visibility"
            unchecked-icon="visibility_off"
            class="q-ml-md"
          />
          <q-checkbox
            v-model="check6"
            checked-icon="visibility"
            unchecked-icon="visibility_off"
            indeterminate-icon="help"
            toggle-indeterminate
            class="q-ml-md"
          />
        </div>

        <div class="col-md-4 col-xs-12 q-pa-sm">
          <p class="q-display-2">Select</p>

          <p class="caption">Single selection</p>
          <q-select v-model="select" :options="options"/>

          <br>

          <q-select
            color="secondary"
            float-label="List with float label"
            v-model="select"
            :options="options"
          />

          <br>

          <p class="caption">Multiple selection</p>
          <q-select multiple color="indigo" v-model="multipleSelect" :options="options"/>
        </div>

        <div class="col-md-4 col-xs-12 q-pa-sm">
          <p class="q-display-2">Option Group</p>

          <p class="caption">Radio group</p>
          <q-option-group
            type="radio"
            color="secondary"
            v-model="radio"
            :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'red' }
        ]"
          />

          <p class="caption">Checkbox group</p>
          <q-option-group
            type="checkbox"
            color="amber"
            v-model="checkbox"
            :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'primary' }
        ]"
          />

          <p class="caption">Toggle group</p>
          <q-option-group
            type="toggle"
            color="purple"
            v-model="toggle"
            :options="[
          { label: 'Bucharest', value: 'bucharest' },
          { label: 'London', value: 'london' },
          { label: 'Paris', value: 'paris', color: 'red' }
        ]"
          />
        </div>

        <div class="col-md-4 col-xs-12 q-pa-sm">
          <p class="q-display-2">Slider</p>

          <p class="caption">
            Standard
            <span class="chip-container">
              <q-chip square color="secondary">Model: {{ standard }} (0 to 50)</q-chip>
            </span>
          </p>
          <q-slider v-model="standard" :min="0" :max="50"/>
          <q-slider v-model="standard" :min="0" :max="50" square/>

          <p class="caption">
            With Label
            <span class="chip-container">
              <q-chip square color="secondary">Model: {{ label }} (-20 to 20, step 4)</q-chip>
            </span>
          </p>
          <q-slider v-model="label" :min="-20" :max="20" :step="4" label color="light-green"/>
        </div>

        <div class="col-md-4 col-xs-12 q-pa-sm">
          <p class="q-display-2">Date time picker</p>

          <!-- Default: implicit "date" type -->
          <q-datetime v-model="date1" float-label="Date"/>

          <br>

          <q-datetime color="purple" v-model="date3" type="datetime" float-label="Date & Time"/>

          <br>

          <q-datetime color="orange" v-model="date2" type="time" float-label="Time"/>
        </div>

        <div class="col-md-4 col-xs-12 q-pa-sm">
          <p class="q-display-2">Date time picker</p>

          <!-- Default: implicit "date" type -->
          <q-datetime v-model="date1" float-label="Date"/>

          <br>

          <q-datetime color="purple" v-model="date3" type="datetime" float-label="Date & Time"/>

          <br>

          <q-datetime color="orange" v-model="date2" type="time" float-label="Time"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import tableData from "../assets/table-data";

export default {
  name: "HelloWorld",
  data() {
    return {
      tableData,
      avatar: "../assets/boy-avatar.jpg",
      columns: [
        {
          name: "desc",
          required: true,
          label: "Dessert (100g serving)",
          align: "left",
          field: "name",
          sortable: true
        },
        {
          name: "calories",
          label: "Calories",
          field: "calories",
          sortable: true
        },
        { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
        { name: "carbs", label: "Carbs (g)", field: "carbs" },
        { name: "protein", label: "Protein (g)", field: "protein" },
        { name: "sodium", label: "Sodium (mg)", field: "sodium" },
        {
          name: "calcium",
          label: "Calcium (%)",
          field: "calcium",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "iron",
          label: "Iron (%)",
          field: "iron",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        }
      ],
      text: "",
      text2: "",
      email: "",
      password: "password",
      select: "bucharest",
      group: "pineapple",
      chips: ["Jim"],
      color: null,
      date: null,
      area:
        "Before you begin with Quasar, it is a good idea to get acquainted with ES6 and have a fairly good knowledge about how Vue works.",
      rating: 0,
      error: true,
      warning: false,
      loading: true,
      chips1: ["Joe"],
      chips2: ["Jack", "Jim"],
      model: "",
      standard: 20,
      label: 5,
      radio1: "two",
      radio2: "one",
      radio3: "three",
      check1: false,
      check2: true,
      check3: true,
      check4: true,
      check5: false,
      options: [
        {
          label: "Google",
          value: "goog"
        },
        {
          label: "Facebook",
          value: "fb"
        },
        {
          label: "Twitter",
          value: "twtr"
        },
        {
          label: "Apple Inc.",
          value: "appl"
        },
        {
          label: "Oracle",
          value: "ora"
        }
      ],
      multipleSelect: ["goog", "twtr"],
      date1: null,
      date2: null,
      date3: null,
      radio: "london",
      checkbox: ["bucharest", "paris"],
      toggle: ["paris"]
    };
  },
  watch: {
    error(val) {
      if (val) {
        this.warning = false;
      }
    },
    warning(val) {
      if (val) {
        this.error = false;
      }
    }
  }
};
</script>
