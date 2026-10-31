<template>
  <section :class="`skills-tools ${className}`" id="skills-tools">
    <div class="mb-5 flex flex-wrap items-center justify-between gap-4">
      <div>
        <SectionHeader title="Skills & Tools" />
        <p class="text-sm text-(--soft-blue)">
          Select a skill to view more details
        </p>
      </div>
      <div class="flex flex-wrap gap-2" aria-label="Filter skills by category">
        <button
          v-for="category in categories"
          :key="category.key"
          type="button"
          class="skill-filter"
          :class="{ 'skill-filter-active': activeCategory === category.key }"
          :aria-pressed="activeCategory === category.key"
          @click="activeCategory = category.key"
        >
          {{ category.label }}
        </button>
      </div>
    </div>

    <div class="skills-tools-grid">
      <div class="skills-tools-list">
        <section
          v-for="group in visibleGroups"
          :key="group.key"
          class="mb-5 last:mb-0"
        >
          <h3 class="skill-group-heading">{{ group.label }}</h3>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="skill in group.skills"
              :key="skill.name"
              type="button"
              class="skill-option"
              :class="{ 'skill-option-active': selectedSkillName === skill.name }"
              :aria-pressed="selectedSkillName === skill.name"
              @click="selectedSkillName = skill.name"
            >
              {{ skill.name }}
            </button>
          </div>
        </section>
        <p v-if="visibleGroups.length === 0" class="text-(--soft-blue)">
          No skills in this category yet.
        </p>
      </div>

      <Transition name="skill-detail" mode="out-in">
        <article
          v-if="selectedSkill"
          :key="selectedSkill.name"
          class="skills-tools-details"
        >
          <div class="mb-4 flex items-center gap-4">
            <img
              :src="resolvedSkillImage"
              :alt="`${selectedSkill.name} icon`"
              class="skill-detail-image"
            />
            <div>
              <h3 class="text-2xl font-bold">{{ selectedSkill.name }}</h3>
              <p class="text-sm text-(--soft-blue)">
                {{ selectedSkillCategory }}
              </p>
            </div>
          </div>

          <p v-if="selectedSkill.description" class="mb-4 whitespace-pre-line">
            {{ selectedSkill.description }}
          </p>

          <div v-if="selectedSkill.relatedProjects?.length" class="mb-4">
            <h4 class="mb-2 font-bold">Related Projects</h4>
            <ul class="flex flex-col gap-2">
              <li
                v-for="project in selectedSkill.relatedProjects"
                :key="project"
                class="related-project"
              >
                {{ project }}
              </li>
            </ul>
          </div>

          <a
            v-if="selectedSkill.refLink"
            :href="selectedSkill.refLink"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link inline-block"
          >
            See more
          </a>
        </article>
        <article
          v-else
          key="empty"
          class="skills-tools-details flex items-center justify-center"
        >
          Select a skill to view its details.
        </article>
      </Transition>
    </div>
  </section>
</template>

<script>
import SectionHeader from '../SectionHeader.vue'

export default {
  name: 'SkillsToolsSection',
  components: {
    SectionHeader,
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    programmingLangData: {
      type: Array,
      required: true,
    },
    artDesignData: {
      type: Array,
      required: true,
    },
    devToolsData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeCategory: 'all',
      selectedSkillName: this.programmingLangData[0]?.name ?? '',
      categories: [
        { key: 'all', label: 'All' },
        { key: 'programmingLang', label: 'Programming' },
        { key: 'artAndDesign', label: 'Art & Design' },
        { key: 'devTools', label: 'Dev Tools' },
      ],
    }
  },
  computed: {
    skillGroups() {
      return [
        {
          key: 'programmingLang',
          label: 'Programming Languages',
          skills: this.programmingLangData,
        },
        {
          key: 'artAndDesign',
          label: 'Art & Design',
          skills: this.artDesignData,
        },
        {
          key: 'devTools',
          label: 'Development Tools',
          skills: this.devToolsData,
        },
      ]
    },
    visibleGroups() {
      return this.skillGroups
        .filter((group) => this.activeCategory === 'all' || group.key === this.activeCategory)
        .map((group) => ({
          ...group,
          skills: group.skills ?? [],
        }))
        .filter((group) => group.skills.length > 0)
    },
    allSkills() {
      return this.skillGroups.flatMap((group) =>
        (group.skills ?? []).map((skill) => ({
          ...skill,
          category: group.label,
        })),
      )
    },
    selectedSkill() {
      return (
        this.allSkills.find((skill) => skill.name === this.selectedSkillName) ??
        this.allSkills[0]
      )
    },
    selectedSkillCategory() {
      return this.selectedSkill?.category ?? ''
    },
    resolvedSkillImage() {
      return this.selectedSkill?.imgPath
        ? new URL(
            `../../assets/images/icons/${this.selectedSkill.imgPath}`,
            import.meta.url,
          ).href
        : ''
    },
  },
  watch: {
    activeCategory(category) {
      const currentSkillIsVisible = this.skillGroups
        .find((group) => category === 'all' || group.key === category)
        ?.skills?.some((skill) => skill.name === this.selectedSkillName)

      if (!currentSkillIsVisible) {
        this.selectedSkillName = this.visibleGroups[0]?.skills[0]?.name ?? ''
      }
    },
  },
}
</script>
