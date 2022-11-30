import{_ as s,c as n,o as a,b as l}from"./app.e5e9439a.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{"outline":2},"headers":[{"level":2,"title":"\u8D77\u6B65","slug":"\u8D77\u6B65","link":"#\u8D77\u6B65","children":[]},{"level":2,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E","link":"#\u914D\u7F6E","children":[{"level":3,"title":"\u5E94\u7528\u914D\u7F6E","slug":"\u5E94\u7528\u914D\u7F6E","link":"#\u5E94\u7528\u914D\u7F6E","children":[]},{"level":3,"title":"\u4E3B\u9898\u914D\u7F6E","slug":"\u4E3B\u9898\u914D\u7F6E","link":"#\u4E3B\u9898\u914D\u7F6E","children":[]},{"level":3,"title":"\u524D\u8A00\u914D\u7F6E","slug":"\u524D\u8A00\u914D\u7F6E","link":"#\u524D\u8A00\u914D\u7F6E","children":[]}]}],"relativePath":"others/vitepress.md","lastUpdated":1669791917000}'),p={name:"others/vitepress.md"},o=l(`<h2 id="\u8D77\u6B65" tabindex="-1">\u8D77\u6B65 <a class="header-anchor" href="#\u8D77\u6B65" aria-hidden="true">#</a></h2><ol><li><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u9879\u76EE\uFF0C\u5E76\u521D\u59CB\u5316\u5305\u7BA1\u7406\u5668</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir vitepress-demo </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> vitepress-demo </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> yarn init</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u5B89\u88C5VitePress\u4F9D\u8D56</p><p>\u65E2\u7136\u6211\u4EEC\u9700\u8981\u521B\u5EFA\u4E00\u4E2A<code>VitePress</code>\u9879\u76EE\uFF0C\u90A3\u4E48\u5B89\u88C5\u4F9D\u8D56\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\u6B65\u9AA4\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yarn add --dev vitepress vue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>\u914D\u7F6E\u542F\u52A8\u5F00\u53D1\u73AF\u5883</p><p><code>VitePress</code>\u9ED8\u8BA4\u9700\u8981\u628A<code>markdown</code>\u6587\u4EF6\u653E\u5728<code>docs</code>\u76EE\u5F55\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir docs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7136\u540E\u6253\u5F00<code>package.json</code>\uFF0C\u914D\u7F6E\u76F8\u5173\u811A\u672C\uFF1A</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress dev docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:serve</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress serve docs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u9700\u8981\u5728\u672C\u5730\u73AF\u5883\u8FD0\u884C\u7684\u8BDD\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u8FD0\u884C<code>yarn docs:dev</code>\u3002</p></li><li><p>\u6DFB\u52A0\u66F4\u591A\u9875\u9762</p><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u9700\u8981\u5C06<code>.md</code>\u6587\u4EF6\u653E\u5728<code>docs</code>\u76EE\u5F55\u4E0B\uFF1B\u5982\u679C\u6587\u4EF6\u5F88\u591A\uFF0C\u9700\u8981\u5206\u7EA7\u7BA1\u7406\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u5728<code>docs/.vitepress/config.js</code>\u4E2D\u914D\u7F6E\u76F8\u5173\u8DEF\u5F84\u3002</p></li></ol><h2 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u5982\u679C\u9700\u8981\u914D\u7F6E<code>VitePress</code>\u3002\u90A3\u4E48\u9700\u8981\u5728<code>docs</code>\u76EE\u5F55\u4E0B\u65B0\u5EFA<code>.vitepress/config</code>\uFF0C\u6B64\u65F6\u7684\u9879\u76EE\u7ED3\u6784\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500 docs</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u251C\u2500 .vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2502  \u2514\u2500 config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502  \u2514\u2500 index.md</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500 package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5728<code>config.js</code>\u4E2D\uFF0C\u9700\u8981\u5BFC\u51FA\u4E00\u4E2A\u5305\u542B\u76F8\u5173\u5C5E\u6027\u7684\u5BF9\u8C61\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// VitePress\u7AD9\u70B9\u5FC5\u8981\u7684\u914D\u7F6E\u6587\u4EF6\`.vitepress/config.js\`\uFF0C\u9700\u8981\u5BFC\u51FA\u4E00\u4E2Ajs\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">One Space</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u7AD9\u70B9\u6807\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4E00\u5EA6\u7A7A\u95F4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u7AD9\u70B9\u63CF\u8FF0\u4FE1\u606F</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u7AD9\u70B9\u90E8\u7F72\u7684\u6839\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u4E8C\u7EA7\u8DEF\u5F84\uFF0Cbase\u7684\u914D\u7F6E\u9700\u8981\u4EE5/\u5F00\u5934\u5E76\u4E14/\u7ED3\u5C3E\uFF0C\u4F8B\u5982/base/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/vitepress/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// lang\u5C5E\u6027\u4EC5\u4F1A\u51FA\u73B0\u5728\u4F7F\u7528\`vitepress build\`\u6784\u5EFA\u65F6\uFF0C\u4F7F\u7528\`vitepress dev\`\u5219\u4E0D\u4F1A\u6709</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// lang: &#39;en-US&#39;,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u4E3B\u9898\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">themeConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5934\u90E8\u5BFC\u822A</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">nav</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u9996\u9875</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5BFC\u822A\u83DC\u5355\u53EF\u5D4C\u5957\uFF0C\u4F7F\u7528items\u5217\u4E3E\u5B50\u83DC\u5355</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u76EE\u5F55\u4E0B\u7684index.md\u4F1A\u88AB\u8F6C\u6362\u4E3Aindex.html\uFF0C</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u8BBE\u7F6E\u8DEF\u7531\u5730\u5740\u65F6\u9700\u8981/\u7ED3\u5C3E\u6216\u8005\u5199\u5168\u5730\u5740/about/index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u91CC\u7A0B\u7891</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/mailpost/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u4FA7\u8FB9\u5BFC\u822A</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sidebar</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u6839\u636E\u8DEF\u7531\u5339\u914D\u591A\u4E2A\u4E0D\u540C\u7684\u4FA7\u8FB9\u680F</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">/mailpost/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5386\u7A0B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2022</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/mailpost/2022.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">          ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// \u4FA7\u8FB9\u680F\u5D4C\u5957</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5176\u4ED6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#F07178;">items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VitePress\u5165\u95E8\u5B9E\u8DF5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/others/vitepress.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">              ]</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">siteTitle</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">One Space</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u8BBE\u7F6E\u7AD9\u70B9\u6807\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">markdown</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">anchor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// permalink: true, // \u8BBE\u7F6E\u951A\u70B9\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">toc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">includeLevel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u8BBE\u7F6E\u76EE\u5F55\u5305\u542B\u7684\u7ED3\u6784\uFF0C\u5373\u4EC5\u5C55\u793AH1\u548CH2\u7684\u6807\u9898</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5E94\u7528\u914D\u7F6E" tabindex="-1">\u5E94\u7528\u914D\u7F6E <a class="header-anchor" href="#\u5E94\u7528\u914D\u7F6E" aria-hidden="true">#</a></h3><p><code>appearance</code></p><ul><li>\u7C7B\u578B\uFF1Aboolean</li><li>\u9ED8\u8BA4\u503C\uFF1Atrue</li><li>\u4F5C\u7528\uFF1A\u662F\u5426\u5F00\u542F\u6DF1\u8272\u4E3B\u9898\u5207\u6362</li></ul><p><code>base</code></p><ul><li>\u7C7B\u578B\uFF1Astring</li><li>\u9ED8\u8BA4\u503C\uFF1A/</li><li>\u4F5C\u7528\uFF1A\u7AD9\u70B9\u90E8\u7F72\u7684\u6839\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u4E8C\u7EA7\u8DEF\u5F84\uFF0Cbase\u7684\u914D\u7F6E\u9700\u8981\u4EE5/\u5F00\u5934\u5E76\u4E14/\u7ED3\u5C3E\uFF0C\u4F8B\u5982/base/</li></ul><p><code>description</code></p><ul><li>\u7C7B\u578B\uFF1Astring</li><li>\u9ED8\u8BA4\u503C\uFF1A<code>A VitePress site</code></li><li>\u4F5C\u7528\uFF1A\u63CF\u8FF0\u7AD9\u70B9</li></ul><p><code>head</code></p><ul><li>\u7C7B\u578B\uFF1AHeadConfig[]</li><li>\u9ED8\u8BA4\u503C\uFF1A[]</li><li>\u4F5C\u7528\uFF1A\u8BBE\u7F6EHTML\u5934\u4FE1\u606F</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  head: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    [&#39;link&#39;, { rel: &#39;preconnect&#39;, href: &#39;https://fonts.gstatic.com&#39;, crossorigin: &#39;&#39; }]</span></span>
<span class="line"><span style="color:#A6ACCD;">    // would render: &lt;link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossorigin /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>lang</code></p><ul><li>\u7C7B\u578B\uFF1Astring</li><li>\u9ED8\u8BA4\u503C\uFF1A<code>en-US</code></li><li>\u4F5C\u7528\uFF1A\u8BBE\u7F6E\u7AD9\u70B9\u8BED\u8A00</li></ul><p><code>lastUpdated</code></p><ul><li>\u7C7B\u578B\uFF1Aboolean</li><li>\u9ED8\u8BA4\u503C\uFF1Afalse</li><li>\u4F5C\u7528\uFF1A\u663E\u793A\u9875\u9762\u7684\u4E0A\u6B21\u66F4\u65B0\u65F6\u95F4\uFF0C\u53EF\u901A\u8FC7<code>themeConfig.lastUpdatedText</code>\u9009\u9879\u8BBE\u7F6E\u6587\u672C</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  lastUpdated: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  themeConfig: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  	lastUpdatedText: &#39;\u4E0A\u6B21\u66F4\u65B0\u6587\u672C&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>markdown</code></p><ul><li>\u7C7B\u578B\uFF1A<code>MarkdownOption</code></li><li>\u4F5C\u7528\uFF1Amarkdown\u76F8\u5173\u914D\u7F6E</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  markdown: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    theme: &#39;material-palenight&#39;, // \u8BBE\u7F6E\u4E3B\u9898\uFF0Chttps://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes</span></span>
<span class="line"><span style="color:#A6ACCD;">    lineNumbers: true, // \u4EE3\u7801\u5757\u4E2D\u663E\u793A\u4EE3\u7801\u884C\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>outDir</code></p><ul><li>\u7C7B\u578B\uFF1Astring</li><li>\u9ED8\u8BA4\u503C\uFF1A<code>./.vitepress/dist</code></li><li>\u4F5C\u7528\uFF1A\u6307\u5B9A\u7AD9\u70B9\u6784\u5EFA\u65F6\u7684\u8F93\u51FA\u76EE\u5F55</li></ul><p><code>srcDir</code></p><ul><li>\u7C7B\u578B\uFF1Astring</li><li>\u9ED8\u8BA4\u503C\uFF1A.</li><li>\u4F5C\u7528\uFF1A\u76F8\u5BF9\u4E8E\u6839\u76EE\u5F55\uFF0C\u5B58\u653Emarkdown\u9875\u9762\u7684\u76EE\u5F55</li></ul><p><code>title</code></p><ul><li>\u7C7B\u578B\uFF1Astring</li><li>\u9ED8\u8BA4\u503C\uFF1AVitePress</li><li>\u4F5C\u7528\uFF1A\u8BBE\u7F6E\u7AD9\u70B9\u7684title</li></ul><p><code>titleTemplate</code></p><ul><li>\u7C7B\u578B\uFF1Astring | boolean</li><li>\u4F5C\u7528\uFF1A\u7AD9\u70B9title\u7684\u540E\u7F00</li></ul><p><code>buildEnd</code></p><ul><li>\u7C7B\u578B\uFF1A<code>(siteConfig: SiteConfig) =&gt; Awaitable&lt;void&gt;</code></li><li>\u4F5C\u7528\uFF1A\u94A9\u5B50\u51FD\u6570\uFF0C\u4F5C\u7528\u5728\u6784\u5EFA\u5B8C\u6210\u4F46\u662FVitePress Cli\u9000\u51FA\u524D</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  async buildEnd(siteConfig) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u4E3B\u9898\u914D\u7F6E" tabindex="-1">\u4E3B\u9898\u914D\u7F6E <a class="header-anchor" href="#\u4E3B\u9898\u914D\u7F6E" aria-hidden="true">#</a></h3><p>\u4E3B\u9898\u914D\u7F6E\uFF08themeConfig\uFF09\u8FD0\u884C\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  themeConfig: {},</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>logo</code></p><ul><li>\u4F5C\u7528\uFF1A\u8BBE\u7F6E\u7AD9\u70B9logo\uFF0C\u53EF\u4EE5\u4F20\u5165\u56FE\u7247\u8DEF\u5F84\u3001\u4E00\u4E2A\u5BF9\u8C61\u6216\u8005\u6839\u636Elight/dark\u4E3B\u9898\u5207\u6362\u7684\u4E0D\u540C\u56FE\u7247\u5BF9\u8C61</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  themeConfig: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    logo: &#39;/logo.svg&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    logo: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    	src: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    	alt: &#39;&#39; // \u975E\u5FC5\u9700</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    logo: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    	light: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    		src: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    		alt: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	},</span></span>
<span class="line"><span style="color:#A6ACCD;">    	dark: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    		src: &#39;&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    		alt: &#39;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    	}</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>siteTitle</code></p><pre><code>+ \u7C7B\u578B\uFF1Astring | false
+ \u4F5C\u7528\uFF1A\u663E\u793A\u5728\u5BFC\u822A\u680F\u7684\u7AD9\u70B9\u6807\u9898
</code></pre><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  themeConfig: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    siteTitle: &#39;Hello World&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>nav</code></p><ul><li>\u4F5C\u7528\uFF1A\u8BBE\u7F6E\u83DC\u5355\u5BFC\u822A\u3002\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u7EA7\u83DC\u5355\uFF0C\u4E5F\u53EF\u8BBE\u7F6E\u591A\u7EA7\u83DC\u5355\uFF0C\u4E00\u822C\u4F4D\u4E8E\u9875\u9762\u9876\u90E8</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  themeConfig: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    nav: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      { text: &#39;Guide&#39;, link: &#39;/guide&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        text: &#39;Dropdown Menu&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        items: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          { text: &#39;Item A&#39;, link: &#39;/item-1&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">          { text: &#39;Item B&#39;, link: &#39;/item-2&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">          { text: &#39;Item C&#39;, link: &#39;/item-3&#39; }</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>sidebar</code></p><ul><li>\u4F5C\u7528\uFF1A\u8BBE\u7F6E\u4FA7\u8FB9\u680F\u83DC\u5355\uFF0C\u53EF\u8BBE\u7F6E\u4E00\u7EA7\u83DC\u5355\uFF0C\u4E5F\u53EF\u8BBE\u7F6E\u591A\u7EA7\u83DC\u5355\u3002\u4E00\u822C\u4F4D\u4E8E\u9875\u9762\u5DE6\u4FA7</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  themeConfig: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    sidebar: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        text: &#39;Guide&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        items: [</span></span>
<span class="line"><span style="color:#A6ACCD;">          { text: &#39;Introduction&#39;, link: &#39;/introduction&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">          { text: &#39;Getting Started&#39;, link: &#39;/getting-started&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">          ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>outline</code></p><ul><li>\u4F5C\u7528\uFF1A\u663E\u793A\u9875\u9762\u5927\u7EB2</li><li>\u9ED8\u8BA4\u503C\uFF1A2\uFF0C\u9ED8\u8BA4\u663E\u793A\u4E8C\u7EA7\u6807\u9898\u53CA\u4EE5\u4E0A\u7684\u5927\u7EB2\uFF0C\u4E09\u7EA7\u6807\u9898\u4E0D\u663E\u793A</li><li>\u7C7B\u578B\uFF1Anumber | [number, number] | \u2018deep\u2019 | false</li></ul><p><code>outlineTile</code></p><ul><li>\u4F5C\u7528\uFF1A\u8BBE\u7F6E\u5927\u7EB2\u6807\u9898</li><li>\u9ED8\u8BA4\u503C\uFF1A<code>On this page</code></li></ul><p><code>socialLinks</code></p><ul><li>\u4F5C\u7528\uFF1A\u5728\u5BFC\u822A\u680F\u663E\u793A\u793E\u4EA4\u6309\u94AE\u94FE\u63A5</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  themeConfig: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    socialLinks: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      { icon: &#39;github&#39;, link: &#39;https://github.com/vuejs/vitepress&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      { icon: &#39;twitter&#39;, link: &#39;...&#39; },</span></span>
<span class="line"><span style="color:#A6ACCD;">      // \u4F20\u5165\u81EA\u5B9A\u4E49\u7684svg\u56FE\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        icon: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          svg: &#39;&lt;svg role=&quot;img&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;&lt;title&gt;Dribbble&lt;/title&gt;&lt;path d=&quot;M12...6.38z&quot;/&gt;&lt;/svg&gt;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        link: &#39;...&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>footer</code></p><ul><li>\u4F5C\u7528\uFF1A\u8BBE\u7F6E\u9875\u9762\u9875\u811A\u4FE1\u606F\uFF0C\u53D7\u9650\u4E8E\u5E03\u5C40\uFF0C\u4EC5\u5728\u6CA1\u6709\u4FA7\u8FB9\u680F\u65F6\u624D\u4F1A\u751F\u6548</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  themeConfig: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    footer: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      message: &#39;Released under the MIT License.&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      copyright: &#39;Copyright \xA9 2019-present Evan You&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>docFooter</code></p><ul><li>\u4F5C\u7528\uFF1A\u6587\u6863\u9875\u811A\uFF0C\u81EA\u5B9A\u4E49\u4E0A\u4E00\u9875\u3001\u4E0B\u4E00\u9875\u94FE\u63A5\u7684\u663E\u793A\u6587\u5B57</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  themeConfig: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    docFooter: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      prev: &#39;Pagina prior&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      next: &#39;Proxima pagina&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u524D\u8A00\u914D\u7F6E" tabindex="-1">\u524D\u8A00\u914D\u7F6E <a class="header-anchor" href="#\u524D\u8A00\u914D\u7F6E" aria-hidden="true">#</a></h3><p>\u524D\u8A00\u914D\u7F6E\u652F\u6301\u57FA\u4E8E\u9875\u9762\u7684\u914D\u7F6E\u3002\u53EF\u4EE5\u5728\u9875\u9762\u6DFB\u52A0\u4EFB\u4F55\u8BBE\u7F6E\u4EE5\u8986\u76D6\u5E94\u7528\u914D\u7F6E\u6216\u4E3B\u9898\u914D\u7F6E\uFF0C\u6709\u4E9B\u8BBE\u7F6E\u53EA\u80FD\u5728<code>FrontMatter</code>\u4E2D\u5B9A\u4E49\u3002\u5728<code>FrontMatter</code>\u4E2D\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>$frontmatter</code>\u6765\u8BBF\u95EE\u4F7F\u7528</p><p><code>\u8BBE\u7F6E</code></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;">title: this is title</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>\u4F7F\u7528</code></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{{ $frontmatter.title }}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,70),e=[o];function c(t,r,i,D,C,A){return a(),n("div",null,e)}const F=s(p,[["render",c]]);export{d as __pageData,F as default};
