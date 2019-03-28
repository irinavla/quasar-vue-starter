<template>
  <q-page class="row justify-center q-pa-md gutter-md">
    <div class="col-xs-12 section">
      <div class="q-display-1">Typography</div>
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
      <div class="q-display-1">Regular 34sp</div>

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
      <div class="q-display-1">Buttons</div>
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
      <div class="q-display-1">Navigation</div>
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
      <div class="q-display-1">Cards</div>
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
      <div class="q-display-1">Collapsible (Accordion)</div>
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
            <q-collapsible avatar="../assets/boy-avatar.png" label="With avatar">
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, impedit.</div>
            </q-collapsible>

            <q-collapsible icon="drafts" label="Disabled" disable>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, consequuntur.</div>
            </q-collapsible>

            <q-collapsible letter="J" right-avatar="../assets/boy-avatar.png" label="Jim">
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
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: "HelloWorld"
};
</script>
