---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a third-year Ph.D. candidate at Illinois Institute of Technology advised by Dr. <a href="http://www.cs.iit.edu/~kshu/">Kai Shu</a>. I obtained my M.S. degree in computer science from University of Oregon in 2021 (advised by Dr. <a href="https://ix.cs.uoregon.edu/~thien/">Thien Nguyen</a>), and my B.S. degree in computer science from Purdue University in 2019 working with Dr. <a href="https://yhlu.net/">Yung-Hsiang Lu</a>.

> I am actively seeking industry research internship for Summer 2025.

# 💡 Research

My research involves building trustworthy AI systems, with a specific emphasis on enhancing both robustness and interpretability. I am broadly interested in fundamental research and interdisciplinary collaborations motivated by important applications, including detecting misinformation and analyzing social network.

# 🔥 News

- _2024.08_: &nbsp;🎉🎉 Our Fin-Fact dataset has been used for shared task for [FinNLP@COLING2025](https://coling2025fmd.thefin.ai/).
- _2024.07_: &nbsp;🎉🎉 One paper has been accepted by [CIKM 2024](https://arxiv.org/abs/2311.09433).
- _2024.05_: &nbsp;🎉🎉 One paper has been accepted by [ICML 2024](https://arxiv.org/pdf/2401.05561).
- _2024.02_: &nbsp;🎉🎉 Passed Ph.D. Qualifying Exam.

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CIKM 2024</div><img src='images/cikm24.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[Trojan Activation Attack: Red-Teaming Large Language Models using Steering Vectors for Safety-Alignment](https://arxiv.org/abs/2311.09433)

**Haoran Wang**, Kai Shu

_Proceedings of ACM International Conference on Information and Knowledge Management 2024_

[**GitHub**](https://github.com/wang2226/Trojan-Activation-Attack) ![](https://img.shields.io/github/stars/wang2226/Trojan-Activation-Attack)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024</div><img src='images/icml24.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[TrustLLM: Trustworthiness in Large Language Models](https://proceedings.mlr.press/v235/huang24x.html)

Lichao Sun\*, Yue Huang\*, **Haoran Wang\***, Siyuan Wu\*, Qihui Zhang\*, Chujie Gao\*, Yixin Huang\*, Wenhan Lyu\*, Yixuan Zhang\*, Xiner Li\*, Zhengliang Liu\*, Yixin Liu\*, Yijue Wang\*, Zhikun Zhang\*, Bhavya Kailkhura, Caiming Xiong, et al. (\*: major contribution).

_Proceedings of The Forty-first International Conference on Machine Learning_

[**GitHub**](https://github.com/HowieHwong/TrustLLM) ![](https://img.shields.io/github/stars/HowieHwong/TrustLLM) &nbsp;&nbsp; [![Website](https://img.shields.io/badge/Website-%F0%9F%8C%8D-blue)](https://trustllmbenchmark.github.io/TrustLLM-Website/) &nbsp;&nbsp; [![Downloads](https://static.pepy.tech/badge/trustllm)](https://pepy.tech/project/trustllm)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">EMNLP 2023</div><img src='images/emnlp23.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[Explainable Claim Verification via Knowledge-Grounded Reasoning with Large Language Models](https://aclanthology.org/2023.findings-emnlp.416/)

**Haoran Wang**, Kai Shu

_Findings of EMNLP 2023_

[**GitHub**](https://github.com/wang2226/FOLK) ![](https://img.shields.io/github/stars/wang2226/FOLK) &nbsp;&nbsp; [**NILLI Workshop@EMNLP23**](https://www.cs.mcgill.ca/~pparth2/nilli_workshop_2023/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">WWW 2023</div><img src='images/www23.png' alt="sym" width="80%"></div></div>
<div class='paper-box-text' markdown="1">

[Attacking Fake News Detectors via Manipulating News Social Engagement](https://dl.acm.org/doi/10.1145/3543507.3583868)

**Haoran Wang**, Yingtong Dou, Canyu Chen, Lichao Sun, Philip S. Yu, Kai Shu

_Proceedings of ACM Web Conference 2023_

[**GitHub**](https://github.com/hwang219/AttackFakeNews) ![](https://img.shields.io/github/stars/hwang219/AttackFakeNews) &nbsp;&nbsp; [**Video**](https://vimeo.com/817846141?share=copy) &nbsp;&nbsp; [**Blog from Montreal AI Ethics Institute**](https://montrealethics.ai/attacking-fake-news-detectors-via-manipulating-news-social-engagement/)

</div>
</div>

# 📝 Preprints

- [FIN-FACT: A Benchmark Dataset for Multimodal Financial Fact Checking and Explanation Generation](https://arxiv.org/abs/2309.08793) Aman Rangapura, **Haoran Wang**, Ling Jian, Kai Shu
- [Investigating Online Financial Misinformation and Its Consequences: A Computational Perspective](https://arxiv.org/abs/2309.12363) Aman Rangapura, **Haoran Wang**, Kai Shu
- [Combating Health Misinformation in Social Media: Characterization, Detection, Intervention, and Open Issues](https://arxiv.org/abs/2211.05289) Canyu Chen\*, **Haoran Wang\***, Matthew Shapiro, Yunyu Xiao, Fei Wang, Kai Shu (\*: eqaul contribution)

# 📖 Educations

- _2022 - Now_, Ph.D., Computer Science. Illinois Institute of Technology, Chicago, IL, USA.
- _2021_, M.S., Computer Science. University of Oregon, Eugene, OR, USA.
- _2019_, B.S., Computer Science. Purdue University, West Lafayette, IN, USA.

---

Last updated on Sep 23, 2024.

<a href="https://mapmyvisitors.com/web/1bweu"  title="Visit tracker"><img src="https://mapmyvisitors.com/map.png?d=SDWOZvjcEGQvmbkHt5vCf__HQwaniKPTjud79Y2vHsE&cl=ffffff" /></a>
